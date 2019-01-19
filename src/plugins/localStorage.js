export default store => {
  store.subscribe((m, state) => {
    localStorage.setItem('boardState', JSON.stringify(state));
  });
};
