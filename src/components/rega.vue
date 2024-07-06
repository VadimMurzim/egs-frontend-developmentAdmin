<template>
  <hadder/>
  <div>
    <div class="rega">Регистрация</div>
    <div class="vernutsya">
      <router-link to="/main" style="display: flex;">
        <img src="../img/To_main.svg" alt="" class="vernutsya_img">
        <div class="vernutsya__text">Вернуться на главную</div>
      </router-link>
    </div>
    <main class="main">
      <div class="text_top">* — отмеченные этим знаком поля являются обязательными для заполнения</div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <!-- Left Side -->
            <div class="main_div__all mt-4">
              <div class="main_text">Фамилия*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.lastName" required placeholder="Фамилия">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">Имя*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.firstName" required placeholder="Имя">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">Отчество*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.middleName" required placeholder="Отчество">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">Дата рождения*</div>
              <div class="main_div" tipe="input">
                <input type="date" id="myInput" class="main_div__input" v-model="form.birthDate" required maxlength="8" style="color: #49494A; width: 312px;">
                <button class="data_but" @click="openDatePicker"><img src="../img/Date.svg" alt="Дата" class="date_icon"></button>
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">Никнейм*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.nickname" required placeholder="Никнейм">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">Номер телефона*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.phone" required placeholder="+7 (___) ___–__–__">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">Пол*</div>
              <div class="gender-switch">
                <div class="gender-option">
                  <input type="radio" id="male" name="gender" value="male" v-model="form.gender">
                  <label for="male"><div class="hover" style="margin-left: 30px;">Мужской</div></label>
                </div>
                <div class="gender-option">
                  <input type="radio" id="female" name="gender" value="female" v-model="form.gender">
                  <label for="female"><div class="hover" style="margin-left: 30px;">Женский</div></label>
                </div>
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
    <div class="main_text">Почта</div>
    <div class="main_div" tipe="input"> 
      <input type="email" class="main_div__input" required placeholder="Почта" @focus="showValidationMessage">
    </div>
    <div id="emailValidationMessage" v-show="validationVisible" style="color: #FD3D48; cursor: pointer;" @click="showConfirmationBlock">
      Отправить код подтверждения
    </div>
  </div>

  <div class="frame" v-show="confirmationVisible"> 
    <div class="overlap-group-wrapper">
      <div class="overlap-group">
        <div class="rectangle"></div>
        <div class="text-wrapper"> 
          <a href="#" style="color: #49494a; cursor: pointer;">Отправить ещё раз 30с</a> 
        </div>
        <p class="div">Введите код с вашей почты</p>
        <div class="div-wrapper">
          <div class="text-wrapper-2">
            <input type="text" class="confirmation-input" v-model="code[0]" @input="focusNext(0)" maxlength="1" style="font-size: 26px; color: #FFF; background-color: transparent; border: none; width: 18px; height: 29px;" ref="codeInput0">
          </div>
        </div>
        <div class="div-wrapper-2">
          <div class="text-wrapper-2">
            <input type="text" class="confirmation-input" v-model="code[1]" @input="focusNext(1)" maxlength="1" style="font-size: 26px; color: #FFF; background-color: transparent; border: none; width: 18px; height: 29px;" ref="codeInput1">
          </div>
        </div>
        <div class="div-wrapper-3">
          <div class="text-wrapper-2">
            <input type="text" class="confirmation-input" v-model="code[2]" @input="focusNext(2)" maxlength="1" style="font-size: 26px; color: #FFF; background-color: transparent; border: none; width: 18px; height: 29px;" ref="codeInput2">
          </div>
        </div>
        <div class="div-wrapper-4">
          <div class="text-wrapper-2">
            <input type="text" class="confirmation-input" v-model="code[3]" @input="focusNext(3)" maxlength="1" style="font-size: 26px; color: #FFF; background-color: transparent; border: none; width: 18px; height: 29px;" ref="codeInput3">
          </div>
        </div>
        <a @click="confirmEmail" style="text-decoration: none;">
          <div class="div-wrapper-5"><div class="text-wrapper-3">Подтвердить</div></div>
        </a>
      </div>
    </div>
  </div>



            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">Пароль</div>
              <div class="main_div" tipe="input">
                <input type="password" class="main_div__input" v-model="form.password" required placeholder="Придумайте пароль">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <!-- Right Side -->
            <div class="main_div__all mt-4">
              <div class="main_text">Steam*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.steam" required placeholder="Ссылка на профиль в Steam">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">FACEIT*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.faceit" required placeholder="Ссылка на профиль в FACEIT">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
          <div class="main_text">Telegram*</div>
          <div class="main_div" tipe="input">
            <input type="text" class="main_div__input" v-model="form.telegram" required placeholder="Логин Telegram">
            <img src="../img/vopros.svg" alt="вопрос" class="main_div__image" @click="toggleModal">
          </div>
        </div>
        <div class="modall" id="myModal" v-show="isModalVisible" style="position:absolute;top:336px;left:796px;">
          Найти свой логин вы можете, выбрав в Telegram: Меню - Настройки - Имя пользователя (Username)
          <img src="../img/Treugolnik_red.svg" alt="" class="treugolka">
        </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">VK*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.vk" required placeholder="Ссылка на страницу в VK">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text">Discord*</div>
              <div class="main_div" tipe="input">
                <input type="text" class="main_div__input" v-model="form.discord" required placeholder="Имя пользователя">
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
              <div class="main_text" style="position: relative;top: 20px;">Игровая дисциплина*</div>
              <div class="custom-dropdown">
                <select class="custom-dropdown-select" v-model="form.game" @change="selectGame">
                  <option value="" selected disabled>Выберите игру</option>
                  <option v-for="game in games" :key="game" :value="game">{{ game }}</option>
                </select>
              </div>
            </div>
            <div class="main_div__all" style="margin-top: 30px;">
          <div class="main_text">Статус*</div>
          <div class="education-status-switch">
            <div class="education-status-option">
              <input type="radio" id="studying" name="education-status" value="studying" v-model="educationStatus">
              <label for="studying"><div style="position: absolute;right: 100px; top: -15px;">Учусь</div></label>
            </div>  
            <div class="education-status-option">
              <input type="radio" id="not-studying" name="education-status" value="not-studying" v-model="educationStatus">
              <label for="not-studying"><div style="position: absolute;right: 50px; width: 100px; top: -15px;">Не учусь</div></label>
            </div>
          </div>
        </div>

        <div v-if="educationStatus === 'studying'" class="vibor" style="margin-top: 30px;">
          <div class="main_div__all" style="margin-top: 30px;">
            <div class="main_text" style="position: relative; top: 20px;">Область*</div>
            <div class="custom-dropdown">
              <select class="custom-dropdown-select" v-model="form.region">
                <option value="" selected disabled>Выберите область</option>
                <option value="Калининградская">Калининградская</option>
              </select>
              <div class="custom-dropdown-arrow" @click="toggleDropdown('region')">
                <img src="img/dropdavn_img.svg" class="arrow" alt="dropdown arrow">
              </div>
              <div class="custom-dropdown-options" v-if="dropdownOpen.region">
                <!-- Options go here if needed -->
              </div>
            </div>
          </div>
          <div class="main_div__all" style="margin-top: 30px;">
            <div class="main_text" style="position: relative; top: 20px;">Город*</div>
            <div class="custom-dropdown">
              <select class="custom-dropdown-select" v-model="form.city">
                <option value="" selected disabled>Выберите город</option>
                <option value="Калининград">Калининград</option>
                <option value="Советск">Советск</option>
                <option value="Светлогорск">Светлогорск</option>
              </select>
              <div class="custom-dropdown-arrow" @click="toggleDropdown('city')">
                <img src="img/dropdavn_img.svg" class="arrow" alt="dropdown arrow">
              </div>
              <div class="custom-dropdown-options" v-if="dropdownOpen.city">
                <!-- Options go here if needed -->
              </div>
            </div>
          </div>
          <div class="main_div__all" style="margin-top: 30px;">
            <div class="main_text" style="position: relative; top: 20px;">Учебное заведение*</div>
            <div class="custom-dropdown">
              <select class="custom-dropdown-select" v-model="form.institution">
                <option value="" selected disabled>Выберите учебное заведение</option>
                <option value="ГБУ КО ПОО 'КИТиС'">ГБУ КО ПОО "КИТиС"</option>
                <option value="МАОУ 'Гимназия №1'">МАОУ "Гимназия №1"</option>
                <option value="МАОУ 'Лицей №10'">МАОУ "Лицей №10"</option>
              </select>
              <div class="custom-dropdown-arrow" @click="toggleDropdown('institution')">
                <img src="img/dropdavn_img.svg" class="arrow" alt="dropdown arrow">
              </div>
              <div class="custom-dropdown-options" v-if="dropdownOpen.institution">
                <!-- Options go here if needed -->
              </div>
            </div>
            </div>
        </div>
        
        </div>
      </div>
      </div>
      <div class="vvod_cont">
        <div class="h_cont">
          <div class="h1_text d-flex justify-content-cente">Подтверждение личности*</div>
          <div class="h2_text d-flex justify-content-cente">Необходимо загрузить сканы двух разворотов паспорта</div>
        </div>
      <div class="row d-flex  justify-content-center " style="margin-left: 0">
        <div class="col-md-6 d-flex justify-content-center"><div class="vvodDocks_block ">
          <label for="fileInput" class="vvodDocks_block__label">
            <img src="../img/doks_ico_1.svg" alt="" class="vvodDocks_block__img">
            <div class="vvodDocks_block__textOne">Загрузите фото первого разворота паспорта, содержащий фотографию, и кем выдано</div>
            <div class="vvodDocks_block__textTue">Допустимый формат файла: .jpeg, .png</div>
          </label>
          <input type="file" id="fileInput" accept=".jpeg, .jpg, .png" style="display:none;">
        </div></div>
        <div class="col-md-6 d-flex justify-content-center"><div class="vvodDocks_block">
          <label for="fileInput" class="vvodDocks_block__label">
            <img src="../img/doks_ico_2.svg" alt="" class="vvodDocks_block__img">
            <div class="vvodDocks_block__textOne">Загрузите фото первого разворота паспорта, содержащий фотографию, и кем выдано</div>
            <div class="vvodDocks_block__textTue">Допустимый формат файла: .jpeg, .png</div>
          </label>
          <input type="file" id="fileInput" accept=".jpeg, .jpg, .png" style="display:none;">
        </div></div>
        <div class="h2_cont">
          <div class="h1_text d-flex justify-content-cente">Фотография лица*</div>
          <div class="h2_text d-flex justify-content-cente">Это необходимо, чтобы мы могли проверить валидность паспорта</div>
        </div>
        <div class="col-md-12 d-flex justify-content-center"><div class="vvodDocks_block">
        
          <label for="fileInput" class="vvodDocks_block__label">
            <img src="../img/doks_ico_3.svg" alt="" class="vvodDocks_block__img">
            <div class="vvodDocks_block__textOne">Загрузите фото первого разворота паспорта, содержащий фотографию, и кем выдано</div>
            <div class="vvodDocks_block__textTue">Допустимый формат файла: .jpeg, .png</div>
          </label>
          <input type="file" id="fileInput" accept=".jpeg, .jpg, .png" style="display:none;">
        </div></div>
        <div id="studying-block" style="display: none;"> 
        <div class="h2_cont">
          <div class="h1_text d-flex justify-content-cente">Справка образовательного учреждения</div>
          <div class="h2_text d-flex justify-content-cente">Нужна для того, чтобы мы убедились в том, что вы действительно обучаетесь</div>
        </div>
        <div class="col-md-12 dd-flex justify-content-center vibor "  >
          <div class="vvodDocks_block" id="vvodDocksBlock" style="margin-top: 30px;">
            <label for="fileInput4" class="vvodDocks_block__label">
              <img src="../img/doks_ico_4.svg" alt="" class="vvodDocks_block__img">
              <div class="vvodDocks_block__textOne">Загрузите фотографию справки с места, где вы сейчас обучаетесь</div>
              <div class="vvodDocks_block__textTue">Допустимый формат файла: .pdf .png .jpg</div>
            </label>
            <input type="file" id="fileInput4" accept=".pdf, .png, .jpg" style="display:none;">
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 140px; margin-bottom: 40px;">
      <div class="end_text d-flex justify-content-center">
        Для завершения регистрации, подпишитесь на наши соц. сети*
      </div>
      <div class="col-md-6 d-flex end_text__a justify-content-center" style="margin-top: 41px;"><a href="" class="end_text__a"><img src="../img/VK.svg" alt="" class="end_text_a__img">Подпишись</a></div>
      <div class="col-md-6 d-flex end_text__a justify-content-center" style="margin-top: 41px;"><a href="" class="end_text__a"><img src="../img/TG.svg" alt="" class="end_text_a__img">Подпишись</a></div>
    </div>
    </main>
    <div class="checkbox-container">
      <input type="checkbox" id="agree" class="checkbox-input">
      <label for="agree" class="checkbox-label">Я согласен на обработку персональных данных.</label>
      <button class="custom-button" >
          Зарегистрироваться
      </button>
</div>
  </div>
  <foter/>
</template>

<script>
  import Hadder from '@/components/hadder.vue'; 
  import Foter from '@/components/footer.vue'; 

export default {
  components: { 
        Hadder,
        Foter,  
        
      },
  data() {
    return {
      validationVisible: false,
      confirmationVisible: false,
      code: ['', '', '', ''],

      form: {
        lastName: '',
        firstName: '',
        middleName: '',
        birthDate: '',
        nickname: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        steam: '',
        faceit: '',
        telegram: '',
        vk: '',
        discord: '',
        game: '',
        region: '',
        city: '',
        institution: ''
      },
      educationStatus: '',
      dropdownOpen: {
        region: false,
        city: false,
        institution: false
      },
      emailValidationVisible: false,
      confirmationVisible: false,
      isModalVisible: false,
      games: ['CS:GO', 'Dota 2', 'PUBG', 'Valorant']
    };
  },
  methods: {
    registerUser() {
      alert('Регистрация прошла успешно');
    },
    openDatePicker() {
      this.$refs.dateInput.click();
    },
    // чтсьый
    showValidationMessage() {
      this.validationVisible = true;
    },
    showConfirmationBlock() {
      this.confirmationVisible = true;
    },
    confirmEmail() {
      this.confirmationVisible = false;
      this.$nextTick(() => {
        const validationMessage = document.getElementById('emailValidationMessage');
        validationMessage.innerText = 'Почта подтверждена';
        validationMessage.style.color = 'var(--default-text2, #00FF5A)';
        validationMessage.style.fontFamily = 'Gilroy';
        validationMessage.style.fontSize = '18px';
        validationMessage.style.fontStyle = 'normal';
        validationMessage.style.fontWeight = '600';
        validationMessage.style.lineHeight = 'normal';
      });
    },
    focusNext(index) {
      if (this.code[index].length === 1 && index < 3) {
        this.$refs[`codeInput${index + 1}`][0].focus();
      }
    }
  },
  
  methods: {

    // чистый
    openDatePicker() {
      this.$refs.dateInput.click();
    },
    // showValidationMessage() {
    //   this.emailValidationVisible = true;
    // },
    // showConfirmationBlock() {
    //   this.confirmationVisible = true;
    // },
    autoFocusNext(index) {
      if (this.confirmationCode[index - 1].length === 1 && index < 4) {
        this.$refs[`input${index}`].focus();
      }
    },
    confirmEmail() {
      // logic for email confirmation
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    register() {
      // logic for registration
    },
    selectGame() {
      // logic for selecting a game
    },
    toggleDropdown(field) {
      this.dropdownOpen[field] = !this.dropdownOpen[field];
    }
  },
  
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleOutsideClick(event) {
      const modal = this.$refs.myModal;
      const modalTrigger = this.$refs.modalTrigger;
      if (modal && !modal.contains(event.target) && !modalTrigger.contains(event.target)) {
        this.isModalVisible = false;
      }
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    toggleDropdown(field) {
      this.dropdownOpen[field] = !this.dropdownOpen[field];
    }
  },
  methods: {
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    handleOutsideClick(event) {
      const modal = this.$refs.myModal;
      if (modal && !modal.contains(event.target) && !event.target.closest('.main_div__image')) {
        this.isModalVisible = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  
};
</script >
  
  <style scoped>
  .rega{
 
 display: flex;
 margin-top: 40px;
 justify-content: center;
 color:  #EAECEC;
font-family: Gilroy;
font-size: 26px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.vernutsya{
 margin-left: 70px;
}
.vernutsya__text{
 margin-top: 3px;
 
 margin-left: 20px;
 color: var(--default-main-text, #EAECEC);
 font-family: Gilroy;
 font-size: 18px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
}
.vernutsya_img{
 width: 15px;
height: 26px;
flex-shrink: 0;
}

main{ 
 background-color: #0C0C0D;
   position: relative;
   top: 40px;
   
width: 100%;
max-width: 1280px;
margin: 0 auto;
height: auto;
padding-bottom: 40px;
flex-shrink: 0;
border-radius: 20px;
border-top: 2px solid var(--default-main-logo, #FD3D48);
background: var(--default-main, #1E1C24);
backdrop-filter: blur(17.5px);
}
.main_text{
 margin-bottom: 10px;
 color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.main_div__input{
 margin-left: 30px;
 color: #fff;
font-family: Gilroy;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
 background: none;
   border: none;
  width: 100%;
  height: 100%;
   outline:none ;
 
}
.main_div__input::before{
 color: var(--default-text5, #4A4D55);
font-family: Gilroy;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
 background: none;
   border: none;
  width: 100%;
  height: 100%;
   outline:none ;
 
}
/* Рабочий ховер  */
.main_div:focus-within input::placeholder {
 color: var(--active-registration, #E14344);
}

.main_div:hover input::placeholder {
 color: var(--active-registration, #E14344);
}
.main_div__input::placeholder {
 transition: color 600ms ease; /* Добавляем переход с задержкой в 600ms */
}

.main_div:hover .main_div__input::placeholder {
 color: var(--active-registration, #E14344);
}
.main_div:focus-within{
 border: 2px solid var(--active-registration, #E14344);

}
.main_div {
 content: attr(placeholder);
 display: flex;
 width: 410px;
 padding: 12px 0px 12px 0px;
 align-items: center;
 gap: 10px;
 border-radius: 10px;
 border: 2px solid var(--default-registration, #49494A);
 transition: border 600ms ease; /* Добавляем переход с задержкой в 600ms */
}

.main_div:hover {
 border: 2px solid var(--active-registration, #E14344);
 /* transition-delay: 600ms; Задержка перехода на 600ms */
}
.main_div__all{
 margin-left: 110px;

}
.education-status-option:hover{
 border: 2px solid var(--active-registration, #E14344);
}
.gender-switch {
 display: flex;
 justify-content: flex-start;
}
.gender-option:hover{
 border: 2px solid var(--active-registration, #E14344);
}
.gender-option:hover .hover{
 color: #FFF;
}
.gender-option {
 transition: border 600ms ease; /* Добавляем переход с задержкой в 600ms */
 width: 200px;
 margin: 1px 0 0 0px;
 padding: 10px;
 border: 2px solid #49494A;
 border-radius: 10px;
}

.gender-option + .gender-option {
 margin-left: 15px; /* Расстояние между блоками не более 15px */
}

.gender-option label {
 position: relative;
 cursor: pointer;
 color: white;
 padding-left: 20px;
}

.gender-option input[type="radio"] {
 display: none;
}

.gender-option input[type="radio"] + label:before {
 margin-left: 25px;
 content: '';
 position: absolute;
 top: 50%;
 left: -5px;
 transform: translateY(-50%);
 width: 20px;
 height: 20px;
 border: 2px solid #FFF;
 border-radius: 50%;
 background-color: transparent;
}

.gender-option input[type="radio"]:checked + label:before {
 background-image: url(../img/krug.svg) ;
 background-repeat: no-repeat;
 background-position: center; 
}

/* При активации переключателя изменяем цвет границ блока */
.gender-option input[type="radio"]:checked ~ div {
 border-color: #E14344;
}
.gender-option input[type="radio"]:checked ~ .gender-option {
 border-color: #E14344; /* Изменяем цвет границ блока при активации переключателя */
}
#emailValidationMessage span {
 color: #E14344;
 cursor: pointer;
 text-decoration: underline;
}
#emailValidationMessage span:hover {
color: #E14344;
   text-decoration: none;
 }

.main_div__input:valid ~ #emailValidationMessage {
 display: block;
}
.frame {

 margin-left: 36px;
}

.frame .overlap-group-wrapper {

 width: 557px;
 height: 271px;
}

.frame .overlap-group {
 position: relative;
 width: 410px;
 height: 269px;
 top: 2px;
 left: 74px;
 border-radius: 10px;
}

.frame .text-wrapper {
 position: absolute;
 top: 138px;
 left: 105px;
 color: var(--defaultregistration);
 font-family: "Gilroy-SemiBold", Helvetica;
 font-weight: 600;
 font-size: 16px;
 letter-spacing: 0;
 line-height: normal;
}

.frame .rectangle {
 /* margin-left: 30px; */
 position: relative;
 right: 400px;
 margin-top: 30px;
 position: absolute;
 width: 410px;
 height: 221px;
 top: 0;
 left: 0;
 border-radius: 10px;
 border: 2px solid;
 border-color: #49494A;
}

.frame .div {
 margin-top: 15px;
 position: absolute;
 top: 19px;
 left: 86px;
 color: #ffffff;
 font-family: "Gilroy-SemiBold", Helvetica;
 font-weight: 600;
 font-size: 16px;
 letter-spacing: 0;
 line-height: normal;
}

.frame .div-wrapper {
 flex-direction: column;
 padding: 15px 22px;
 top: 60px;
 left: 55px;
 border: 2px solid;
 border-color: #49494a;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 position: absolute;
 border-radius: 10px;
 overflow: hidden;
}

.frame .text-wrapper-2 {
 position: relative;
 width: fit-content;
 margin-top: -2px;
 font-family: "Gilroy-SemiBold", Helvetica;
 font-weight: 600;
 color: #ffffff;
 font-size: 24px;
 letter-spacing: 0;
 line-height: normal;
}

.frame .div-wrapper-2 {
 flex-direction: column;
 padding: 15px 22px;
 top: 60px;
 left: 135px;
 border: 2px solid;
 border-color: #49494a;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 position: absolute;
 border-radius: 10px;
 overflow: hidden;
}

.frame .div-wrapper-3 {
 flex-direction: column;
 padding: 15px 22px;
 top: 60px;
 left: 215px;
 border: 2px solid;
 border-color: #49494a;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 position: absolute;
 border-radius: 10px;
 overflow: hidden;
}

.frame .div-wrapper-4 {
 flex-direction: column;
 padding: 15px 22px;
 top: 60px;
 left: 295px;
 border: 2px solid;
 border-color: #49494a;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 position: absolute;
 border-radius: 10px;
 overflow: hidden;
}

.frame .div-wrapper-5 {
 padding: 15px 93px;
 top: 179px;
 left: 55px;
 background-color: #E14344;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 position: absolute;
 border-radius: 10px;
 overflow: hidden;
}

.frame .text-wrapper-3 {
 position: relative;
 width: fit-content;
 margin-top: -1px;
 color: #ffffff;
 font-family: "Gilroy-SemiBold", Helvetica;
 font-weight: 600;
 font-size: 16px;
 letter-spacing: 0;
 line-height: normal;
}
.container_right{
 
   position: absolute;
   left: 616px;

   width: 600px;
}

.education-status-switch {
 
 position: relative;
 left: -116px;
 top: -34px;
   display: flex;

   justify-content: flex-start;
}



.education-status-option {
 transition: border 600ms ease; /* Добавляем переход с задержкой в 600ms */
 width: 200px;
 margin: 30px 0 0 110px;
 padding: 10px;
 padding-left: 190px;

 border: 2px solid #49494A;
 border-radius: 10px;
}

.education-status-option + .education-status-option {
 margin-left: 15px;
}

.education-status-option label {
 position: relative;
 cursor: pointer;
 color: white;
 padding-left: 20px;
}

.education-status-option input[type="radio"] {
 display: none;
}

.education-status-option input[type="radio"] + label:before {
 margin-left: 30px;
 display: flex;
 justify-content: center;
 align-items: center;
 content: '';
 position: absolute;
 top: -4px;
 left: -190px;
 transform: translateY(-50%);
 width: 20px;
 height: 20px;
 border: 2px solid #FFF;
 border-radius: 50%;
 background-color: transparent;
}

.education-status-option input[type="radio"]:checked + label:before {
 background-image: url(../img/krug.svg) ;
 background-repeat: no-repeat;
 background-position: center; 
}

.education-status-option input[type="radio"]:checked ~ .education-status-option {
 border-color: #E14344;
}

.custom-dropdown {
 
 position: relative;
 left: 200px;
 width: 200px;
 padding: 10px;
 /* background-color: #49494A;
 border: 2px solid #49494A; */
 border-radius: 5px;
 position: relative;
}

.custom-dropdown-select {
 position: relative;
 top: 12px;
 left: -214px;
 height: 50px;
   width: 230%;
 padding: 5px;
 background-color:transparent;
 border: 1px solid #49494A;
border-radius: 10px;
 color: white;
 font-size: 16px;
 cursor: pointer;
}

.custom-dropdown-options {
 display: none;

 position: absolute;
 top: 100%;
 left: 0;
 width: 100%;
 max-height: 50px;
 background-color: #49494A;
 border: 2px solid #49494A;
 border-top: none;
 border-radius: 0 0 5px 5px;
 overflow: hidden;
 display: none;
}
.custom-dropdown-options:hover{
 border: 2px solid #E14344;
}
.custom-dropdown-option {
 padding: 8px 10px;
 font-size: 16px;
 cursor: pointer;
}

.custom-dropdown-option:hover {
 background-color: #333;
}
.vibor{
   position: relative;
   top: -51px;
   left: -4px;


}
.line{
 position: absolute;
   left: -618px;
   top: 1019px;
 background: #49494A;
 width: 1280px;
 height: 1px;
}
.text_top{
 display: flex;
   margin-top: 42px;
   width: 100%;
   align-items: center;
   justify-content: center;
   color: var(--default-text5, #4A4D55);
   font-family: Gilroy;
   font-size: 18px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;

}
.rega{

 display: flex;
 margin-top: 40px;
 justify-content: center;
 color: var(--default-main-text, #EAECEC);
font-family: Gilroy;
font-size: 26px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.vernutsya__text{
 margin-top: 3px;
 
 margin-left: 20px;
 color: var(--default-main-text, #EAECEC);
 font-family: Gilroy;
 font-size: 18px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
}
.vernutsya_img{
 width: 15px;
height: 26px;
flex-shrink: 0;
}
.vvodDocks_textTop{
 position: relative;
   left: 70px;
 display: flex;
 justify-content: center;
 color: #FFF;
 font-family: Gilroy;
 font-size: 20px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
}
.vvodDocks_textDannoe{
 position: relative;
   left: 70px;
 display: flex;
 justify-content: center;
 color: #49494A;
 font-family: Gilroy;
 font-size: 16px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
}

.vvodDocks {
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 50px;
 position: absolute;
   top: 1350px;
   left: 345px;

}
.vvodDocks_block {
 
 width: 520px;
 height: 400px;
 margin-bottom: 20px;
 border-radius: 30px;
 border: 3px dashed var(--button-hover, #4C4E52);
 background: var(--default-bloki2, #242229);
}

.vvodDocks_block__img {
 width: 120px;
 height: 170px;
 margin: 30px auto;
 display: block;
}

.vvodDocks_block__textOne,
.vvodDocks_block__textTue {
 text-align: center;
 font-family: Gilroy;
 color: #49494A;
 font-size: 16px;
 font-weight: 500;
}

.vvodDocks_block__textOne {
 margin-top: 20px;
}

.vvodDocks_block__textTue {
 margin-top: 80px;
}

.vvodDocks_bottomBlock {
 width: 520px;
 height: 400px;
 border-radius: 20px;
 border: 3px dashed #49494A;
 background: #131313;
 margin-bottom: 20px;
}
.vvodDocks_block_text{
 top: -40px;
 position: absolute;
 left: 40px;
 color: #FFF;
 font-family: Gilroy;
 font-size: 20px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
}
.end_text__a{
 text-decoration: none;
 color: var(--default-text5, #4A4D55);
text-align: center;
font-family: Gilroy;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;   
}
.end_text{
 
 color: #FFF;
text-align: center;
font-family: Gilroy;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.end_text_a__img{
 margin-right: 11px;
}
.end_podpiska{
 display: flex;
 position: relative;
 top: 2762px;
 left: -250px;
}
.end_podpiska__text{
 margin-left: 20px;
 margin-top: 7px;
 color: #49494A;

 text-align: center;
 font-family: Gilroy;
 font-size: 16px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
}
.end_podpiska__img{
 width: 30px;
 height: 30px;
 flex-shrink: 0;
}
.checkbox-container {
 /* margin: 0 auto; */
 /* width: 100%; */
 margin-left: 176px;
 margin-top: 70px;
 display: flex;
 justify-content: center;
 align-items: center;
}

.checkbox-input {
 display: none;
}

.checkbox-label {
 color: #FFF;
 margin-right: -187px;
text-align: center;
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
 position: relative;
 padding-left: 30px;
 cursor: pointer;
 color: white;
}

.checkbox-label::before {
 
 content: '';
 position: absolute;
 left: 0;
 top: -3px;
 width: 25px;
height: 25px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #FFF;
}

.checkbox-label::after {
 content: url(../img/Kvadrat_ico.svg); /* Unicode character for checkmark */
 position: relative;

 top: 2px;
 left: -397px;
 transform: translate(-50%, -50%);
 font-size: 16px;
 color: white;
 opacity: 0;
}

.checkbox-input:checked + .checkbox-label::after {
 opacity: 1;
}

:root {
 --main: #E14344; /* Определение переменной для основного цвета */
}

.custom-button {
 position: relative;
 top: 132px;
 left: -214px;
 display: inline-flex;
 padding: 15px 50px;
 justify-content: center;
 align-items: center;
 gap: 10px;
 color: #FFF;
 text-align: center;
 font-family: Gilroy;
 font-size: 16px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
 background-color: #E14344; /* Использование переменной для цвета фона кнопки */
 border: none;
 border-radius: 30px;
 cursor: pointer;
 text-decoration: none;
}

.custom-button:hover {
 background-color: #c71d1f; /* Цвет фона кнопки при наведении */
}
  /* Скрыть иконку календаря */
  input[type="date"]::-webkit-calendar-picker-indicator {
   display: none;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-outer-spin-button {
   -webkit-appearance: none;
   margin: 0;
}
.data_but{
 background-color: transparent;
 border: none;
}
.modall {

 position: absolute;
 top: 287px;
 left: 137px;
 padding: 10px 20px;
 justify-content: center;
 align-items: center;
 gap: 10px;
 border-radius: 10px;
 border: 1px solid var(--main, #E14344);
 background: #1E1C24;
 color: #FFF;
 font-family: Gilroy;
 font-size: 14px;
 font-style: normal;
 font-weight: 600;
 line-height: 135%; /* 18.9px */
 width: 383px;
 max-height: 58px;
}
.treugolka{

   position: absolute;
   top: 57px;
   left: 332px;
}
.main_div__image{
 margin-right: 30px;
}
.arrow{
 position: relative;
 top: -26px;
 left: 177px;
}

.white{
width: 100%;
margin-top: 140px;
margin-bottom: 40px;
}
.h1_text{
color: #FFF;
display: flex;
flex-direction: column;
font-family:  Gilroy;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.h2_text{
color: #49494A;

font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.flex-direction-column{
flex-direction: column;
}
.justify-content-center{
justify-content: center;
}
.dd-flex{
display: flex;
}
.h_cont{
margin-top: 140px;
margin-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
.h2_cont{
margin-top: 40px;
margin-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
@media (max-width: 768px) {
 main{
   margin-left: 0;
   margin-right: 0;
  

 }
 .main_div__all{
   margin-left: 0;
 }
 .modall{
   left: 33px;
 }
 .frame{
   margin-left: -73px;
 }
}
@media (max-width:576px) {
 .checkbox-label::after{
   top: -17px;
   left: -225px;
 }
}
  </style>
  