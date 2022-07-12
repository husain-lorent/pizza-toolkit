import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoryId: 0,
  currentPage: 1,
  searchValue: "",
  sort: {
    name: "Popular",
    sortProperty: "rating",
  },
};
const filterSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    selectCateoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});
export const { selectCateoryId, setSort, setCurrentPage, setFilters,setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;