<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">DOB Protocol Content Editor</h1>

    <!-- Login Section -->
    <div
      v-if="!isAuthenticated"
      class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
    >
      <h2 class="text-xl font-semibold mb-4">Editor Login</h2>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="password"
          >Password</label
        >
        <input
          id="password"
          v-model="password"
          type="password"
          class="w-full px-3 py-2 border rounded-md"
          @keyup.enter="authenticate"
        />
      </div>
      <button
        @click="authenticate"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
      >
        Login
      </button>
      <p v-if="authError" class="mt-2 text-red-500 text-sm">{{ authError }}</p>
    </div>

    <!-- Editor Section -->
    <div v-else>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Content Files</h2>
        <button
          @click="logout"
          class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <!-- File Browser -->
      <div class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div v-if="loading" class="text-center py-4">
          Loading content files...
        </div>

        <div v-else-if="contentFiles.length === 0" class="text-center py-4">
          No content files found.
          <button
            @click="createNewFile"
            class="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
          >
            Create New File
          </button>
        </div>

        <div v-else>
          <div class="mb-4 flex justify-end">
            <button
              @click="createNewFile"
              class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
            >
              Create New File
            </button>
          </div>

          <ul class="divide-y">
            <li
              v-for="file in contentFiles"
              :key="file.path"
              class="py-3 flex justify-between items-center"
            >
              <span class="truncate">{{ file.path }}</span>
              <div class="flex space-x-2">
                <button
                  @click="editFile(file)"
                  class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm"
                >
                  Edit
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Content Editor -->
      <div
        v-if="activeFile"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium">Editing: {{ activeFile.path }}</h3>
          <button
            @click="activeFile = null"
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Close
          </button>
        </div>

        <div class="mb-4">
          <textarea
            v-model="activeFile.content"
            class="w-full h-96 px-3 py-2 border rounded-md font-mono text-sm"
          ></textarea>
        </div>

        <div class="flex justify-end space-x-3">
          <button
            @click="saveFile"
            class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
            :disabled="saving"
          >
            {{ saving ? "Saving..." : "Save Changes" }}
          </button>
        </div>
      </div>

      <!-- New File Modal -->
      <div
        v-if="showNewFileModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-md"
        >
          <h3 class="text-lg font-medium mb-4">Create New File</h3>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="newFilePath"
              >File Path (e.g., guide/getting-started.md)</label
            >
            <input
              id="newFilePath"
              v-model="newFilePath"
              type="text"
              class="w-full px-3 py-2 border rounded-md"
              placeholder="path/to/file.md"
            />
          </div>

          <div class="flex justify-end space-x-3">
            <button
              @click="showNewFileModal = false"
              class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              @click="confirmCreateFile"
              class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
              :disabled="!newFilePath || newFilePath.trim() === ''"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Authentication state
const isAuthenticated = ref(false);
const password = ref("");
const authError = ref("");

// Editor state
const contentFiles = ref([]);
const activeFile = ref(null);
const loading = ref(true);
const saving = ref(false);
const showNewFileModal = ref(false);
const newFilePath = ref("");

// Simple authentication (replace with a more secure method in production)
const EDITOR_PASSWORD = "dobprotocol"; // Change this to your desired password

function authenticate() {
  if (password.value === EDITOR_PASSWORD) {
    isAuthenticated.value = true;
    authError.value = "";
    loadContentFiles();
  } else {
    authError.value = "Invalid password. Please try again.";
  }
}

function logout() {
  isAuthenticated.value = false;
  password.value = "";
  activeFile.value = null;
}

// Content management
async function loadContentFiles() {
  loading.value = true;
  try {
    const { data } = await useFetch("/api/content-files");
    contentFiles.value = data.value || [];
  } catch (error) {
    console.error("Failed to load content files:", error);
  } finally {
    loading.value = false;
  }
}

async function editFile(file) {
  try {
    const { data } = await useFetch(
      `/api/content-file?path=${encodeURIComponent(file.path)}`
    );
    if (data.value && data.value.content) {
      activeFile.value = {
        path: file.path,
        content: data.value.content,
      };
    }
  } catch (error) {
    console.error("Failed to load file content:", error);
  }
}

async function saveFile() {
  if (!activeFile.value) return;

  saving.value = true;
  try {
    await $fetch("/api/content-file", {
      method: "POST",
      body: {
        path: activeFile.value.path,
        content: activeFile.value.content,
      },
    });
    // Reload content files after saving
    await loadContentFiles();
  } catch (error) {
    console.error("Failed to save file:", error);
    alert("Failed to save changes. Please try again.");
  } finally {
    saving.value = false;
  }
}

function createNewFile() {
  showNewFileModal.value = true;
  newFilePath.value = "";
}

async function confirmCreateFile() {
  if (!newFilePath.value || newFilePath.value.trim() === "") return;

  // Ensure the path ends with .md
  let path = newFilePath.value.trim();
  if (!path.endsWith(".md")) {
    path += ".md";
  }

  try {
    await $fetch("/api/content-file", {
      method: "POST",
      body: {
        path,
        content:
          "---\ntitle: New Document\ndescription: Add your description here\n---\n\n# New Document\n\nStart writing your content here.",
      },
    });

    showNewFileModal.value = false;
    await loadContentFiles();

    // Find and edit the newly created file
    const newFile = contentFiles.value.find((f) => f.path === path);
    if (newFile) {
      editFile(newFile);
    }
  } catch (error) {
    console.error("Failed to create file:", error);
    alert("Failed to create new file. Please try again.");
  }
}

// Initialize
onMounted(() => {
  if (isAuthenticated.value) {
    loadContentFiles();
  }
});
</script>
