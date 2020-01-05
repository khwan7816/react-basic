let A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {
  var arr = s(A);
  console.log(arr)
  return arr[0]
}

function s (arr) {
  let front = arr[0];
  let del = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === front) {
      let a = arr.splice(i, 1);
      let b = arr.splice(0, 1);
      console.log(a, b)
      del = true;
      break;
    }
  }

  return del ? s(arr) : arr
}

console.log(solution(A));
