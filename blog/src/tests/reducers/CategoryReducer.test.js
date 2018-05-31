import * as types from "../../actions/actionTypes";
import CategoryReducer, {
  reselectCategories
} from "../../reducers/CategoryReducer";

describe("CategoryReducer reducer", () => {
  it("should handle initial state", () => {
    expect(CategoryReducer(undefined, {})).toEqual([]);
  });

  it("should handle FETCH_CATEGORIES_SUCCESS action", () => {
    const categories = ["react", "python"];
    const to_normalize = {
      categories: [{ name: "react" }, { name: "python" }]
    };

    expect(
      CategoryReducer(undefined, {
        type: types.FETCH_CATEGORIES_SUCCESS,
        payload: to_normalize
      })
    ).toEqual(categories);
  });
  it("should reselectCategories return correct list of categories", () => {
    const categories = ["react", "python", "redux"];
    const state = {
      categories
    };
    expect(reselectCategories(state)).toEqual(categories);
  });
});
