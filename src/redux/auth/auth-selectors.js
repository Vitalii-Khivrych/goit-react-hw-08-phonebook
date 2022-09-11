const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsLoading = state => state.auth.isLoading;

const getUserName = state => state.auth.user.name;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser,
  getIsLoading,
};

export default authSelectors;
