

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN::SUCCESS':
      return [...state, action.response.user];
    case 'LOGIN::FAILED':
      return state;
    default:
      return state;
  }
}
