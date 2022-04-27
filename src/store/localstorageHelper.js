export const Keys = {
  REFRESH_TOKEN: 'refresh_token',
  ACCESS_TOKEN: 'access_token',
  EMAIL: 'email',
  IS_ADMIN: 'isadmin',
  FIRST_NAME: 'first_name',
  LAST_NAME: 'last_name',
  FULL_NAME: 'full_name',
  USER_ID: 'user_id',
}

class LocalStorageHelper {
  constructor() {
      this.defineProperties();
  }

  clearAuthData() {
      // localStorage.clear()
  }

  defineProperties() {
      Object.defineProperties(this, {
          email: {
              get: () => localStorage.getItem(Keys.EMAIL),
              set: (val) => localStorage.setItem(Keys.EMAIL, val),
          },
          userId: {
              get: () => localStorage.getItem(Keys.USER_ID),
              set: (val) => localStorage.setItem(Keys.USER_ID, val),
          },
          refreshToken: {
              get: () => localStorage.getItem(Keys.REFRESH_TOKEN),
              set: (val) => localStorage.setItem(Keys.REFRESH_TOKEN, val),
          },
          fullName: {
              get: () => localStorage.getItem(Keys.FULL_NAME),
              set: (val) => localStorage.setItem(Keys.FULL_NAME, val),
          }
      });
  }
}

const localStorageHelper = new LocalStorageHelper();
export default localStorageHelper;