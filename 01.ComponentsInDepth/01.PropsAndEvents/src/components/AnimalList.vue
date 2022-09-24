<!--"age": "2021(년생)"
"careAddr": "경상남도 창원시 의창구 창이대로 71 (명서동
창원시농업기술센터) 축산과"
"careNm": "창원유기동물보호소"
"careTel": "055-225-5701"
"chargeNm": "창원시의창성산구"
"colorCd": "갈색"
"desertionNo": 448567202200695
"filename": "http://www.animal.go.kr/files/shelter/2022/08/202208261808101_s.jpg"
"happenDt": 20220826
"happenPlace": "의창구 동읍 월잠리 212"
"kindCd": "[개] 믹스견"
"neuterYn": "N"
"noticeEdt": 20220903
"noticeNo": "경남-창원1-2022-00387"
"noticeSdt": 20220826
"officetel": "055-225-5701"
"orgNm": "경상남도 창원시 의창성산구"
"popfile": "http://www.animal.go.kr/files/shelter/2022/08/202208261808101.jpg"
"processState": "보호중"
"sexCd": "F"
"specialMark": "L-8-1-34 갈색. 대형포획틀에 포획됨. "
"weight": "10(Kg)" }-->
<template>
  <div class="wrap">
    <AnimalSearch :is-active="isActive"/>
    <div class="items">
      <article class="block" v-for="item in items" :key="item.desertionNo">
  <!--      <img class="fit-picture" src="../assets/pexels-photo-4206712.jpeg" />-->
        <img class="fit-picture" :src="item.popfile" />
        <h2>{{item.kindCd}}</h2>
        <p>{{display(item)}}</p>
      </article>
    </div>
  </div>
</template>

<script>
import AnimalSearch from "@/components/AnimalSearch";
export default {
  name: "AnimalList",
  components: {AnimalSearch},
  props: {
    msg: String
  },
  data() {
    return {
      items: [],
      isActive: true,
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.response = await this.$apiAnimalInfo();
      this.items = this.response.items.item;
      console.log(this.response);
    },
    display(item) {
      const sexCd = ["M", "F"].includes(item.sexCd) ? ("M" === item.sexCd ? '수컷' : '암컷') : '기타';
      let message = `${item.age} / ${sexCd} / ${item.colorCd}`;
      message = message.length > 18 ? [message.substring(0, 32), '...'].join("") : message;
      return message;
    },
    scrollEvents() {
      console.log("scrollEvents", window.scrollY);
      this.isActive = !(window.scrollY > 0);
    },
  },
  mounted() {
    window.scrollTo(0,0);
    document.addEventListener('scroll', this.scrollEvents);
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 980px;
  height: 1vm;
}

.block {
  background-color: #fefefe;
  align-items: start;
  width: 300px;
  height: 380px;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-top: 20px;
  margin-left: 20px;
  padding: 14px;
}

.fit-picture {
  width: 100%;
  height: 290px;
}

.block h2 {
  margin-top: 14px;
  font: bold 20px/1 'NEXON Lv1 Gothic OTF Light';
  letter-spacing: 1px;
  color: #444;
  margin-bottom: 5px;
  text-align: left;
}

.block p {
  font: 15px/1.2 'NEXON Lv1 Gothic OTF Light';
  color: #777;
  text-align: left;
}

.fit-picture:hover {}
</style>
