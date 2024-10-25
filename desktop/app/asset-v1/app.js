/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() { /* just copied the JS file code from my 20 polos Oceanlight PC port for this for you to use*/
    this.name = "Surfs Up", this.version = "1", this.date = "2024", this.folder = "asset-v1/", this.looptime = 10666, this.bpm = 90, this.totalframe = 510, this.nbpolo = 10, this.nbloopbonus = 7, this.bonusloopA = !1, this.bonusendloopA = !1, this.recmaxloop = 69, this.recminloop = 2, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#00D4FF", this.col0 = "#00091E", this.col1 = "#00D4FF", this.col2 = "#00D4FF", this.col3 = "#0073A8", this.col4 = "#00D4FF", this.animearray = [{
        name: "01_Melon",
        color: "AEC52C",
        uniqsnd: !0
    }, {
        name: "02_Barista",
        color: "B5A237",
        uniqsnd: !0
    }, {
        name: "03_Chichika",
        color: "C5803D",
        uniqsnd: !0
    }, {
        name: "04_Tourist",
        color: "DB5544",
        uniqsnd: !0
    }, {
        name: "05_Tim",
        color: "F2254A",
        uniqsnd: !0
    }, {
        name: "06_Scuba",
        color: "1E3362",
        uniqsnd: !1
    }, {
        name: "07_Siren",
        color: "959595",
        uniqsnd: !1
    }, {
        name: "08_Newsman",
        color: "394868",
        uniqsnd: !0
    }, {
        name: "09_Dane",
        color: "5E677A",
        uniqsnd: !0
    }, {
        name: "10_Lifeguard",
        color: "777B85",
        uniqsnd: !0
    }, {
        name: "11_Coconut",
        color: "E15A18",
        uniqsnd: !1
    }, {
        name: "12_Uku",
        color: "2B6B53",
        uniqsnd: !0
    }, {
        name: "13_Terra",
        color: "5E6541",
        uniqsnd: !1
    }, {
        name: "14_Band",
        color: "B35D25",
        uniqsnd: !0
    }, {
        name: "15_Jellyfish",
        color: "896132",
        uniqsnd: !1
    }, {
        name: "16_Sunrise",
        color: "E16B1E",
        uniqsnd: !1
    }, {
        name: "17_Tiki",
        color: "6F1E1F",
        uniqsnd: !0
    }, {
        name: "18_Captain",
        color: "3D3D7D",
        uniqsnd: !0
    }, {
        name: "19_Sungod",
        color: "C23B19",
        uniqsnd: !0
    }, {
        name: "20_Rapper",
        color: "AD2116",
        uniqsnd: !0
    },  { /* add the other stuff */
        name: "1_RegTon",
        color: "B61E69",
        uniqsnd: !0
    }, { /* add the other stuff */
        name: "2_ChaM",
        color: "B61E69",
        uniqsnd: !1
    }, { /* add the other stuff */
        name: "3_Payaso",
        color: "B61E69",
        uniqsnd: !0
    },  { /* add the other stuff */
        name: "4_ElChavo8",
        color: "B61E69",
        uniqsnd: !0
    },  { /* add the other stuff */
        name: "5_Boom",
        color: "B61E69",
        uniqsnd: !1
    },   { /* add the other stuff */
        name: "6_MBass",
        color: "3F528D",
        uniqsnd: !1
    },  { /* add the other stuff */
        name: "7_DeeSpit",
        color: "3F528D",
        uniqsnd: !0
    },  { /* add the other stuff */
        name: "8_Junior",
        color: "3F528D",
        uniqsnd: !1
    },   { /* add the other stuff */
        name: "9_Siren",
        color: "3F528D",
        uniqsnd: !0
    },   { /* add the other stuff */
        name: "10_Coco",
        color: "3F528D",
        uniqsnd: !1
    },   { /* add the other stuff */
        name: "11_Doohickey",
        color: "019A92",
        uniqsnd: !0
    },   { /* add the other stuff */
        name: "12_Crystal",
        color: "019A92",
        uniqsnd: !1
    },   { /* add the other stuff */
        name: "13_ARP",
        color: "019A92",
        uniqsnd: !0
    },   { /* FUCK THIS SHIT */
        name: "14_NinjaLowTaper",
        color: "019A92",
        uniqsnd: !1
    }, { /* add the other stuff */
        name: "15_DuckWtf",
        color: "019A92",
        uniqsnd: !0
    }, { /* add the other stuff */
        name: "16_Trato",
        color: "FFA51E",
        uniqsnd: !1
    }, { /* add the other stuff */
        name: "17_IForgorThisGuysName",
        color: "FFA51E",
        uniqsnd: !0
    }, { /* add the other stuff */
        name: "18_MoonLady",
        color: "FFA51E",
        uniqsnd: !1
    }, { /* add the other stuff */
        name: "19_Luxury",
        color: "FFA51E",
        uniqsnd: !1
    }, { /* THE LAST ONE YEAAAAAAAA */
        name: "20_WOAAAaaaHHHHHH",
        color: "FFA51E",
        uniqsnd: !0
    }], this.bonusarray = [/* NO BONUSES BREH */];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
