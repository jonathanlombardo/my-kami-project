// # schema Test 5x5

// const globalColors = [
//   ["blue", "rgb(29, 159, 225)"],
//   ["yellow", "rgb(227, 231, 29)"],
//   ["green", "rgb(25, 242, 83)"],
//   ["red", "rgb(231, 29, 29)"],
//   ["pink", "rgb(241, 100, 175)"],
// ];

// const schemes = [
//   ["10x10", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(241, 100, 175)"],
//   ["5x5", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(29, 159, 225)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(29, 159, 225)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(29, 159, 225)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(29, 159, 225)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)"],
//   ["5x5", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)"],
//   ["5x5", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)"],
//   ["5x5", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)"],
//   ["6x3", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)"],
// ];

const globalColors = [
  {
    colorName: "blue",
    rgbCode: "rgb(29, 159, 225)",
  },

  {
    colorName: "yellow",
    rgbCode: "rgb(227, 231, 29)",
  },

  {
    colorName: "green",
    rgbCode: "rgb(25, 242, 83)",
  },

  {
    colorName: "red",
    rgbCode: "rgb(231, 29, 29)",
  },

  {
    colorName: "pink",
    rgbCode: "rgb(241, 100, 175)",
  },
];

const schemes = [
  {
    row: 10,
    col: 10,
    fillColors: ["rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(241, 100, 175)"],
  },

  {
    row: 5,
    col: 5,
    fillColors: ["rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(29, 159, 225)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(29, 159, 225)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(241, 100, 175)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(29, 159, 225)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(29, 159, 225)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)"],
  },

  {
    row: 5,
    col: 5,
    fillColors: ["rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)"],
  },

  {
    row: 5,
    col: 5,
    fillColors: ["rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)"],
  },

  {
    row: 5,
    col: 5,
    fillColors: ["rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(29, 159, 225)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)"],
  },

  {
    row: 5,
    col: 5,
    fillColors: ["rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(231, 29, 29)", "rgb(227, 231, 29)"],
  },

  {
    row: 6,
    col: 3,
    fillColors: ["rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(241, 100, 175)", "rgb(227, 231, 29)", "rgb(25, 242, 83)", "rgb(25, 242, 83)", "rgb(25, 242, 83)"],
  },
];
