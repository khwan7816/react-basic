let A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {
  var result = 0;
  for (let i = 0; i < A.length; i++) {
    let res = result ^ A[i];
    console.log(res);
    result = res;
  }
  return result;
}

solution(A)
