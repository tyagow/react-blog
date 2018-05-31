import Immutable from "seamless-immutable";

describe("sorting array copy returns copy ?", () => {
  it("should sort array as i expect :) study case for handle sorting and copying object", () => {
    const elements = [{ id: 3 }, { id: 2 }];
    const copyElements = [...elements];
    const elementsExpected = [{ id: 2 }, { id: 3 }];
    expect(copyElements.sort(element => element.id)).toEqual(elementsExpected);
    expect(elements).not.toEqual(elementsExpected);
  });
});

describe("copy object with spread operator changing one attribute", () => {
  it("should change attribute of an object", () => {
    const element = { id: "1", deleted: false };
    expect({ ...element, deleted: true }).toEqual({ id: "1", deleted: true });
  });
});

describe("Immutable JS", () => {
  it("should be possible to map an array inside immutable object", () => {
    const state = { categories: Immutable({ items: ["react", "python"] }) };
    const categories = state.categories.getIn(["items"]);
    const coppy = categories.map(category => category);
    expect(coppy).toEqual(["react", "python"]);
  });
});
