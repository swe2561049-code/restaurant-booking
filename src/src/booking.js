// Хүний тооноос хамаарч ширээ захиалгын урьдчилгаа төлбөр тооцох функц
function calculateDeposit(guests) {
  if (guests <= 0) {
    throw new Error("Хүний тоо 1 ба түүнээс дээш байх ёстой");
  }
  // 5-аас дээш хүнтэй бол нэг хүний 10,000₮ урьдчилгаа авна
  if (guests > 5) {
    return guests * 10000;
  }
  // 5 ба түүнээс цөөн хүнтэй бол урьдчилгаагүй
  return 0;
}

module.exports = { calculateDeposit };
