import axios from 'axios';

const KEY_ENCODING =
  'ijjts1mR3Zq%2B%2BrxBTsbsbfMnaKWUIMM4v%2FBxGDT%2BTii1O96794WQfE%2BpcQQx7eV1ltjWyQ0glQgEFZa%2FFqeFSQ%3D%3D';
const API_URI =
  '/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?';

const setAnimaliaInfo = (info) => {
  info = Object.assign(info ?? {}, {
    bgnde: '20220801',
    endde: '20220831',
    upkind: '417000',
    kind: '',
    upr_cd: '',
    org_cd: '',
    care_reg_no: '',
    state: '',
    pageNo: '1',
    numOfRows: '30',
    neuter_yn: '',
  });

  let animaliaInfo = [];
  animaliaInfo.push(`serviceKey=${KEY_ENCODING}`);
  animaliaInfo.push(`bgnde=${info.bgnde}`);
  animaliaInfo.push(`endde=${info.endde}`);
  animaliaInfo.push(`upkind=${info.upkind}`);
  animaliaInfo.push(`kind=${info.kind}`);
  animaliaInfo.push(`upr_cd=${info.upr_cd}`);
  animaliaInfo.push(`org_cd=${info.org_cd}`);
  animaliaInfo.push(`care_reg_no=${info.care_reg_no}`);
  animaliaInfo.push(`state=${info.state}`);
  animaliaInfo.push(`pageNo=${info.pageNo}`);
  animaliaInfo.push(`numOfRows=${info.numOfRows}`);
  animaliaInfo.push(`neuter_yn=${info.neuter_yn}`);

  return [API_URI, animaliaInfo.join('&')].join('');
};

export default {
  methods: {
    async $apiAnimalInfo(parameter) {
      try {
        const response = await axios.get(setAnimaliaInfo(parameter));
        return response.data.response.body;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
