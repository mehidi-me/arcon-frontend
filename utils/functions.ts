export const isElementExistsInArray = (arr: any[], value: string) => {
  let result: boolean = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      result = true;
      break;
    }
  }
  return result;
};

export const deleteAnElementFromTheArray = (arr: any[], value: string) =>
  arr.filter((item) => item !== value);
