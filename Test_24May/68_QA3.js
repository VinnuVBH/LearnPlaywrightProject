function classifyJsBasicsScore(score) {
  if (score >= 90) {
    return "EXCELLENT";
  }
else if (score >= 75 && score<= 89) {
    return "GOOD";
  }
  if (score >= 50 && score <= 74) {
    return "NEEDS_PRACTICE";
  }
  if (score < 50) {
    return "REVISIT";
  }

}
