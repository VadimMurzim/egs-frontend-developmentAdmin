<script>
import axios from 'axios';
import ImagePreview from './componentsNewsForm/ImagePreview.vue';

export default {
  data() {
    return {
      title: '',
      text: '',
      publication_time: '',
      imageFile: null,
      imagePreview: '',
      showImagePreview: false,
    }
  },
  methods: {
    submitForm() {
    
      let formData = new FormData();
      formData.append('title', this.title);
      formData.append('text', this.text);
      formData.append('publication_time', this.publication_time);
      formData.append('image', this.imageFile);

      let context = this;

      axios.post('/admin/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function (response){

        context.title = '';
        context.text = '';
        context.publication_time = '';
        context.imageFile = null;
        context.imagePreview = '';
        context.showImagePreview = false;

        // console.log("Ответ http файл", context.imageFile);
        // console.log("Ответ http путь", context.imagePreview);
      })
      .catch(function (error) {
        console.error(error);
      });
    },
    captureImage(image) {
      // console.log("Пойман файл", image['file']);
      // console.log("Пойман путь", image['imagePreview']);

      this.imageFile = image['file'];
      this.imagePreview = image['imagePreview'];
      this.showImagePreview = image['show'];
    }
  },
  components: {
    ImagePreview,
  }
};
</script>
<template>
    <div class="craete_news_input_img_cont d-flex">
        
      <ImagePreview :imageFile="imageFile" :imagePreview="imagePreview" :showImagePreview="showImagePreview"
       @send-file="captureImage"/>

        <div class="craete_news_input_cont d-flex flex-column">
          <div class="craete_news_input_cont_top d-flex justify-content-between align-items-center">
            <input
              type="text"
              class="craete_news_input_cont_top_input"
              placeholder="Заголовок"
              v-model="title"
            />
            <input
              type="datetime-local"
              class="craete_news_input_cont_top_date"
              placeholder="Дата публикации"
              v-model="publication_time"
            />
          </div>
          <div class="craete_news_input_cont_bottom">
            <p class="craete_news_input_cont_bottom_p">Текст новости</p>
            <textarea
              class="craete_news_input_cont_bottom_textarea"
              placeholder="Текст"
              v-model="text"
            ></textarea>
          </div>
        </div>
    </div>
    <div class="craete_news_button_cont d-flex justify-content-end align-items-center">
        <button class="craete_news_button" @click="submitForm">Создать</button>
        <button class="craete_news_button">Опубликовать</button>
    </div>
</template>
<style scoped>
@font-face {
  font-family: 'Gilroy';
  src: url('../../../../assets/fonts/gilroy-regular.woff2') format('woff2'),
       url('../../../../assets/fonts/gilroy-regular.woff') format('woff'),
       url('../../../../assets/fonts/gilroy-regular.ttf') format('truetype');

}

*{
    margin: 0;
    padding: 0;
}
body{
    background: #151319;
    
    z-index: -1;
    font-family: 'Gilroy', sans-serif;
    
}
/* Стилизация полосы прокрутки */
::-webkit-scrollbar {
  width: 5px;
  background: var(--default-bg, #151319);
  }
  
  /* Стилизация ползунка */
  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
background: var(--default-main-text, #EAECEC); 
  }
  
  /* Стилизация при наведении на ползунок */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #1a1a1b; 
  }
.bodyq{
  
    height: 2133px;
    z-index: 0;
 

}
header{
  background-color:#1E1C24;
  /* position: fixed; */
  backdrop-filter: blur(17.5px);
    padding-left: 285px;
    padding-right: 285px;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 15px;
   
    }
.nav_list{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 600px;
}


.div_login{
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding-top: 12px;
}


/* ___________ */

.search-bar {
  z-index: 101;
  position: relative;
  bottom: 13px;
  display: flex;
  width: 401px;
  padding: 10px 0px 10px 20px;
  align-items: center;
  gap: 20px;border-radius: 10px;
  background: var(--default-bg, #151319);
  align-items: center;

  margin-left: 100px;
  margin-right: 40px;
  margin-top: 24px;
  margin-bottom: 24px;
}

.search-bar input {
  width: 80%;
  background: none;
  border: none;
  color: white;
  margin-left: 10px;
}

.search-bar img {
  margin-top: 3px;
  margin-left: 5px;
  width: 20px;
  height: 20px;
}
.svg_logo{
    margin-right: 30px;

}
.button {

  color: var(--default-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
  z-index: 100;
position: relative;
top: 10px;
text-align: center;
border-radius: 10px;
background: var(--default-main-logo, #FD3D48);
display: inline-flex;
padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 10px;
border: none; 
  outline: none;
} 

.button:hover {

  transform: 3s ease; /* увеличиваем размер кнопки при наведении */
  background: #FF525C;
}
.button-register:hover {

  background: #B2B5BC;
}
.button-register{
  border: none; 
  outline: none;
  
  list-style: none;
  color: #151319;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
    z-index: 100;
  position: relative;
  top: 10px;
  text-align: center;
  border-radius: 10px;
  background: #EAECEC;
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 5px;

}
.palka {
  background-color: #E14344;
  width: 120px;
  height: 2px;
  position: absolute;
  top: 135px;
  left: -126px; /* Изменяем left, чтобы палочка выезжала за границы экрана */
  transition: transform 0.3s ease;
}
.nav_list_item__link{color: #FFF;
}
.nav_list_item__link:hover{
  color: #E14344;  
}
.nav_list__item:hover .palka {
  left: -26px
}
/*Выпод меню*/
.dropbtn{
    position: relative;
    top: 20px;
    width: 130px;
    background-color: #0D0D0D;
    color: #FFF;
    background: none;
    border: none;
        }
.dropdown {
  position: relative;
  display: in5ne-block;
  font-size: 14px;


  background-color: #0D0D0D;
  color: #FFF;
    background: none;
  border: none;
}

.dropdown-content {
  margin-top: 20px;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
  background-color: #0D0D0D;
  color: #FFF;
  font-size: 14px;
  background: none;
  border: none;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: #0D0D0D;
  color: #FFF;
  font-size: 14px;
  background: none;
  border: none;
}

.dropdown-content a:hover {background-color: #000}

.dropdown:hover .dropdown-content {
  display: block;
}
a {
    text-decoration: none; /* Убираем подчеркивание у ссылок */
}

li {
    list-style: none; /* Убираем маркеры списка */
}
main{
    margin-top: 20px;
    display: flex;
  
}

   footer{
   
   display: flex;
   align-items: end;
   justify-content: center;
     }
     .footer__container{
        border-bottom: none;
    width: 1780px;
    height: 402px;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    border-top: 2px solid var(--default-main-logo, #FD3D48);
    background: var(--default-main, #1E1C24);
    backdrop-filter: blur(17.5px);
     }
     .footer_container__svg{
      position: relative;
      top: 80px;
      left: 215px;
    
     }
     .footer_container_ul_li__first{
      position: relative;
      bottom: 5px;
     }
     .footer_container_ul__li{
        color: white;
        max-width: 188px;
      position: relative;
      left: 500px;
      margin-bottom: 15px;
     }
  
     .foter_container_ul__li{
        color: white;
      position: relative;
      max-width: 221px;
      left: 715px;
      bottom: 207px;
      margin-bottom: 15px;
     }
   
    .footer_container__svetlogorsk{
      z-index: 1000000;
      position: relative;
      left: 1100px;
      bottom: 432px;
      width: 175px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #49494A;
    /* background: url(Svetl_hover.svg), lightgray 45.341px 5px / 49.091% 86.667% no-repeat, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 13.07%, rgba(73, 73, 74, 0.20) 71.11%); */
    }
    .footer_container__kitis{
     
      position: relative;
      left: 1100px;
      top: -400px;
      width: 175px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #49494A;
    /* background: url(<path-to-image>), lightgray 45.341px 5px / 49.091% 86.667% no-repeat, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 13.07%, rgba(73, 73, 74, 0.20) 71.11%); */
    }
    .footer_container_kitis__text{
      margin-left: 20px;
      color: rgba(255, 255, 255, 0.20);
      max-width: 134px;
      text-align: center;
      font-family: Roboto;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .footer_container__svetlogorsk:hover{
        /* background: url(Rectangle142.png); */
      }
      .footer_palka{
        position: relative;
        left: 100px;
        bottom: 310px;
        width: 1280px;
      height: 1px;
      background: #888;
      }
      .footer_text{
        position: relative;
        left: 500px;  
        bottom: 285px;
        color: #888;
        width: 540px;
      text-align: c;
      font-family: Montserrat;
      font-size: 14px;  
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-bottom: 1px solid  #888 ;
      }
      .futer_fuuuter{
        max-width: 1920px;
        margin-top: 215px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
     .footer_container__a{
      position: relative;
     }
     .container{
        position: relative;
        top: -15px;
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: space-between;
     }
     .menue{
        width: 350px;
height: 1158px;
flex-shrink: 0;
fill: #1E1C24;

backdrop-filter: blur(17.5px);
     }
     .menue{
        border-radius: 10px;
       
        width: 350px;
height: 1158px;
flex-shrink: 0;
background-color: #1E1C24;

backdrop-filter: blur(17.5px);
     }
     .menue_nead{
        margin-right: 30px;
        margin-left: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        border-bottom: 1px solid #272A31;

color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
     }
     .menue_filling{
        margin-top: 21px;
        margin-left: 30px;
     }
     .menue_filling_li{
        display: flex;
        align-items: center;
     }
     .menue_filling_li_text{
        background: transparent;
        border: none;
        color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
     }
     .menue_filling_li_notafivation{
        margin-bottom: 9px;
        color: var(--default-main-logo, #FD3D48);
font-family: Gilroy;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
     }
     .menue_filling_li_text:hover{
        cursor: pointer;
        color: var(--default-main-logo, #FD3D48);
     }
     .menue_filling_li_text:active{
        border-bottom: 1px solid #FD3D48;
        cursor: pointer;
        color: var(--default-main-logo, #FD3D48);
     }
     .zayavki{
        border-radius: 10px;
        width: 580px;
height: 1158px;
flex-shrink: 0;
background-color: #1E1C24;

backdrop-filter: blur(17.5px);
     }
     .zayavki_hedder{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        border-bottom: 1px solid #272A31;
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 30px;
     }
     .zayavki_hedder_text{
        color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
     }
     .zayavki_hedder_notofication{
        margin-bottom: 25px;
        color: var(--default-main-logo, #FD3D48);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
     }
.zayavki_filling{
    display: flex;
    flex-direction: column;
}
.zayavki_button{
    margin-bottom: 15px;
    margin-right: 30px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    display: inline-flex;
height: 48px;
justify-content: space-between;
align-items: center;
border-radius: 10px;
background: var(--default-bloki2, #242229);
}
.zayavki_button_text{
margin-left: 30px;
color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.zayavki_button_img_text{
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
}
.zayavki_button_img{
    margin-left: 15px;
    margin-right: 30px;
}
.zayavki_button_img_container{
    display: flex;
}
.center{
    margin-left: 20px;
}
.zayavki_button.active{
    background: var(--default-main-logo, #FD3D48);
}
.zayavki_button:active{
    background: var(--default-main-logo, #FD3D48);
}
.profile{
    border-radius: 10px;
    margin-left: 20px;
    width: 880px;
height: 1158px;
flex-shrink: 0;
background-color: #1E1C24;

backdrop-filter: blur(17.5px);
}
.profile_head{
    color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
    height: 110px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #272A31;
}
.profile_content{
    margin-left: 30px;
    margin-top: 30px;
}
.profile_content_row{
    display: flex;
    margin-bottom: 15px;
}
.profile_content_row_name{
    color: var(--default-text4, #787C87);

font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.profile_content_row_data{
    display: flex;
    margin-left: 5px;
    color: #FFF;
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.profile_content_row_data_a{
    margin-left: 5px;
    color: var(--default-main-logo, #FD3D48);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.profile_content_row_data_palka{
    margin-right: 10px;
    margin-left: 10px;
    font-size: 16px;
    color: #787C87;
}
.button {

    color: var(--default-text, #EAECEC);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
    z-index: 100;
  position: relative;
  top: 10px;
  text-align: center;
  border-radius: 10px;
  background: var(--default-main-logo, #FD3D48);
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none; 
    outline: none;
  } 
  
  .button:hover {
  
    transform: 3s ease; /* увеличиваем размер кнопки при наведении */
    background: #FF525C;
  }
  .button-register:hover {
  
    background: #B2B5BC;
  }
  .button-register{
    border: none; 
    outline: none;
    
    list-style: none;
    color: #151319;
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
      z-index: 100;
    position: relative;
    top: 10px;
    text-align: center;
    border-radius: 10px;
    background: #EAECEC;
    display: inline-flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: 5px;
  
  }
  .menue_filling_li_text.active {
    border-bottom: 1px solid #FD3D48;
    color: var(--default-main-logo, #FD3D48);
}
.Container_main_none{display: flex;}


.craete_news_container{
  margin-left:21px ;
  width: 1480px;
height: 1734px;
flex-shrink: 0;
background-color: #1E1C24;

backdrop-filter: blur(17.5px);
}
.craete_news_container_header{
margin-bottom: 30px;
 
height: 110px;
border-bottom: #272A31 1px solid;
margin-right: 30px;
margin-left: 30px;
color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.craete_news_input_img{
  border-right: 2px solid #272A31;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: auto;
  flex-shrink: 0;
  border-top-left-radius:7px ;
  border-bottom-left-radius: 7px;
  background: var(--default-bloki2, #242229);
}
.craete_news_input_img_h2{
  color: var(--default-text4, #787C87);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 15px;
margin-bottom: 13px;
}
.craete_news_input_img_h3{
  color: var(--default-text5, #4A4D55);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 7px;
}
#craete_news_input_img_button{
  position: relative;
  top: -57px;
  left: 1280px;
  display: flex;
border: none;
  display: inline-flex;
height: 36px;
width: 138px;
height: 36px;
justify-content: center;
align-items: center;

flex-shrink: 0;
border-radius: 7px;
background: var(--default-text5, #4A4D55);

}
.craete_news_input_img_cont{
  width: 1419px;
height: auto;
flex-shrink: 0;
border-radius: 7px;
background: var(--default-bloki2, #242229);
margin-left: 30px;
}
.craete_news_input_cont{
  
  margin-left: 25px;
  margin-right: 20px;
  width: 100%;
}
.craete_news_input_cont_top{
height: 47px;
border-bottom: 2px solid #272A31;
}
.craete_news_input_cont_top_input{
  width: 500px;
  border: none;
  background-color: transparent;
  color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.craete_news_input_cont_top_date{
  border: none;
  background-color: transparent;
  color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.craete_news_input_cont_bottom_textarea{
  color: #EAECEC;
  width: 1053px;
height: 98px;
flex-shrink: 0;
border-radius: 7px;
border: 2px solid var(--default-bloki, #272A31);
background-color: transparent;
}
.craete_news_input_cont_bottom_p{
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.craete_news_button{
  margin: 15px;
  display: inline-flex;
height: 36px;
padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 7px;
background: var(--default-main-text, #EAECEC);
color: var(--default-bg, #151319);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.craete_news_button:last-child{
  margin-right: 30px;

}
.craete_news_button:hover{
  background-color: #4A4D55;
}
.history_news_cont_header{
  width: 100%;
  height: 64px;
  border-bottom: 2px solid #272A31;
  color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 30px;
}
.history_news_cont{
  margin-top: 48px;
  width: 1419px;
  margin-right: 30px;
  margin-left: 30px;
}
.history_news_cont_main{
  width: 100%;
  overflow: auto;
  margin-bottom: 8px;
}
.history_news_cont_main_row{
  margin-left: 30px;
  width: 1419px;
height: 45px;
flex-shrink: 0;
border-radius: 7px;
background: var(--default-bloki2, #242229);
}
.history_news_cont_main_row_id_cont{
  width: 80px;
height: 45px;
flex-shrink: 0;
border-radius: 7px;
background: var(--default-bloki, #272A31);
}
.history_news_cont_main_row_id{
  color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 0px;

}
.history_news_cont_main_row_title_cont{
  width: 415px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 7px;
  background: var(--default-bloki, #272A31);
  margin-bottom: 0px;
}
.history_news_cont_main_title{
  color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0px;
}
.history_news_cont_main_row_text{
  color: var(--default-text4, #787C87);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;  
margin-bottom: 0px;
}
.history_news_cont_main_row_date_cont{
  width: 115px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 7px;
  background: var(--default-bloki, #272A31);
  margin-bottom: 0px;
}
.history_news_cont_main_row_date{
  color: var(--default-text4, #787C87);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 0px;
}
.true{
  color: var(--default-text2, #00FF5A);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 0px;
}
.history_news_cont_main_row_button_cont{
  margin-right: 20px;
}
.history_news_cont_main_row_button{
  background-color: transparent;
  border: none;
}

.news_container{
  margin-left:21px ;
  width: 1480px;
height: 1734px;
flex-shrink: 0;
background-color: #1E1C24;

backdrop-filter: blur(17.5px);
}
.news_container_header{
margin-bottom: 30px;
 
height: 110px;
border-bottom: #272A31 1px solid;
margin-right: 30px;
margin-left: 30px;
color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.news_input_img{
  border-right: 2px solid #272A31;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: auto;
  flex-shrink: 0;
  border-top-left-radius:7px ;
  border-bottom-left-radius: 7px;
  background: var(--default-bloki2, #242229);
}
.news_input_img_h2{
  color: var(--default-text4, #787C87);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 15px;
margin-bottom: 13px;
}
.news_input_img_h3{
  color: var(--default-text5, #4A4D55);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 7px;
}
#news_input_img_button{
  position: relative;
  top: -57px;
  left: 1280px;
  display: flex;
border: none;
  display: inline-flex;
height: 36px;
width: 138px;
height: 36px;
justify-content: center;
align-items: center;

flex-shrink: 0;
border-radius: 7px;
background: var(--default-text5, #4A4D55);

}
.hidden {
  display: none;
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
  display: flex;
}

.fade-out {
  display: flex;
  animation: fadeOut 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
      opacity: 0;
      transform: translateY(-20px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
      opacity: 1;
      transform: translateY(0);
  }
  to {
      opacity: 0;
      transform: translateY(-20px);
  }
}

.news_input_img_cont{
  margin-top: 10px;
  margin-bottom: 2px;
  width: 1419px;
  height: auto;
  flex-shrink: 0;
  border-radius: 7px;
  background: var(--default-bloki2, #242229);
  margin-left: 30px;
}
.news_input_cont{
  margin-left: 25px;
  margin-right: 20px;
  width: 100%;
}
.news_input_cont_top{
  height: 47px;
  border-bottom: 2px solid #272A31;
}
.news_input_cont_top_input{
  width: 500px;
  border: none;
  background-color: transparent;
  color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.news_input_cont_top_date{
  border: none;
  background-color: transparent;
  color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.news_input_cont_bottom_textarea{
  color: #EAECEC;
  width: 1053px;
height: 98px;
flex-shrink: 0;
border-radius: 7px;
border: 2px solid var(--default-bloki, #272A31);
background-color: transparent;
}
.news_input_cont_bottom_p{
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.news_input_img{
  height: 200px;
  width: 320px;
}
.news_input_cont_top_date{
  margin-bottom: 0;
  margin-right: 10px;
}

/* :root {
  --defaultmain: rgba(30, 28, 36, 1);
  --defaultbg: rgba(21, 19, 25, 1);
  --defaultbloki: rgba(39, 42, 49, 1);
  --defaultmain-logo: rgba(253, 61, 72, 1);
  --defaultmain-text: rgba(234, 236, 236, 1);
  --defaulttext-2: rgba(0, 255, 90, 1);
  --defaultbloki-2: rgba(36, 34, 41, 1);
  --defaulttext-3: rgba(161, 161, 163, 1);
  --defaulttext-4: rgba(120, 124, 135, 1);
  --defaulttext-5: rgba(74, 77, 85, 1);
  --gradient-placementgoldplacement: rgba(36, 34, 41, 1);
  --gradient-placementsilverplacement: rgba(36, 34, 41, 1);
  --gradient-placementbronzeplacement: rgba(36, 34, 41, 1);
  --buttondefault: rgba(39, 42, 49, 1);
  --buttonhover: rgba(36, 34, 41, 1);
  --buttonactive: rgba(253, 61, 72, 1);
} */
</style>