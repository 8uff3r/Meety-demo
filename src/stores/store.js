import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore("Users", () => {
  //Refs
  const lang = ref("en"),
    user = ref(null),
    color = ref("red"),
    token = ref(null),
    isUserLoggedIn = ref(false),
    // Getters
    getAuthStatus = () => {
      return isUserLoggedIn;
    },
    //Setters
    setToken = (newToken) => {
      token.value = newToken;
      if (token.value) {
        isUserLoggedIn.value = true;
      } else {
        isUserLoggedIn.value = false;
      }
    },
    setUser = (newUser) => {
      user.value = newUser;
    },
    setColor = (newColor) => {
      color.value = newColor;
    },
    setLang = (newLang) => {
      lang.value = newLang;
    };

  return {
    lang,
    user,
    color,
    token,
    isUserLoggedIn,
    getAuthStatus,
    setToken,
    setUser,
    setColor,
    setLang,
  };
});
