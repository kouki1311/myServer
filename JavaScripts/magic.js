'use strict'

let magicGrid = new MagicGrid({
    container: ".container", //要素を包括しているHTML or クラス or ID (必須)
    static: true, //デフォルト：false (静的コンテンツの場合は必須)
    items: 10, //アイテム数 (動的コンテンツの場合は必須)
    gutter: 100, //各要素間のマージン(px)。デフォルト：25
    maxColumns: 10, //列の最大数。デフォルト：Infinite
    useMin: true, //要素を揃える際に短い列を優先。デフォルト：false
    animate: true, //要素を配置する際のアニメーション。デフォルト：false
  });
  magicGrid.listen();


