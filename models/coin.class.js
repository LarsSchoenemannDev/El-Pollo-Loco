class CoinObject extends Collect {

  static coinImage = ["img/8_coin/coin_1.png"]
    // "img/8_coin/coin_2.png"];


  constructor(x, y) {
    super(x, y, 80, 80, CoinObject.coinImage, "coin");
    this.offset = { top: 20, bottom: 20, left: 20, right: 20 };
  }
}

