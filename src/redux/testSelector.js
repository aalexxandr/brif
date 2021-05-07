import { createSelector } from "reselect"

const getUsers = (state) => (
  state.users
)

const getUsersSelector = () => createSelector(getUsers, (users) => (
  users.filter( u => true )
) )