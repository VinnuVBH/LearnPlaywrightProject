function calculateJsBasicsWeightedScore(passed, failed, skipped) {
  let p1 = passed * 2;
  let f1 = -failed;
  let s1 = 0;

  return p1 + f1 + s1;
}
