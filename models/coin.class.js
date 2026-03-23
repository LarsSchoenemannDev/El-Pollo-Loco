class CoinObject extends Collect {

  // Das Schlüsselwort static bedeutet: Diese Eigenschaft gehört zur Klasse selbst, 
  // nicht zu den einzelnen Objekten.
  static coinImage = ["img/8_coin/coin_1.png"]

  offset = { top: 0, bottom: 0, left: 210, right: 0 };

  constructor(x, y) {

    // console.log("Images received:", CoinObject.coinImage);
    super(x, y, 70, 70, CoinObject.coinImage, "coin");

  }

}