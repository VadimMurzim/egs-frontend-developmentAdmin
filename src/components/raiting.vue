<template>
    <hadder/>
   <div class="row" style="--bs-gutter-x:0; margin-top: 50px;" id="app">
      <div class="raiting_container_top row" style="--bs-gutter-x:0;">
        <div class="Block_container col-md-6" style=" max-width: 880px;">
          <div class="block_HeadText"><img src="../img/Frame85.svg" alt="" class="block_HeadImg"></div>
          <div class="hr_block"></div>
          <div class="koloni_container">
            <div class="flex">
              <div class="kolonka">Место</div>
              <div class="kolonka" id="nick">Никнейм игрока</div>
            </div>
            <div class="kolonka margin" style="margin-right: 112px;">Очки</div>
          </div>
          <div class="reiting_container">
            <div class="stroka_container">
                <div v-for="(mmrai, index) in mmrait" :key="index" class="stroka" style="margin-right: 30px;">
  <div class="space-between">
    <div class="flex">
      <div class="top">{{ mmrai.top }}</div>
      <div class="nick">{{ mmrai.nick }}</div>
    </div>
    <div class="skore">{{ mmrai.skore }}</div>
  </div>
  <div class="wrapper">
    <div class="block">
      <div class="item-holder">
        <div class="title">Открыть профиль</div>
        <div class="code">{{ mmrai.kode }}</div>
        <div class="subtitle">nick</div>
        <div class="description">Показать список</div>
        <div class="group">
          <div class="info">Рейтинг ММ: {{ mmrai.skore }}</div>
          <div class="info2">{{ mmrai.top }} место</div>
          <img class="image" src="../img/line-261.svg" />
        </div>
        <img class="picture" src="/../img/group-89.png" />
      </div>
    </div>
  </div>
</div>

                
            </div>
          </div>
          <div class="Block_footer">
            <img src="/../img/Line258.svg" alt="" class="Block_footer_imgRight">
            <button id="teamsBtn" class="blocka_button" style="height: 36px; width: 370px;">Подробнее</button>
            <img src="/../img/Line259.svg" alt="">
          </div>
        </div>
        <div class="Block_container col-md-6" style=" max-width: 880px;">
          <div class="block_HeadText"><img src="../img/Group87.png" alt="" class="block_HeadImg"></div>
          <div class="hr_block"></div>
          <div class="koloni_container">
            <div class="flex">
              <div class="kolonka">Место</div>
              <div class="kolonka" id="nick">Название команды</div>
            </div>
            <div class="kolonka margin" style="margin-right: 112px;">Очки</div>
          </div>
          <div class="reiting_container">
            <div class="stroka_container">
                <div v-for="(mmrai, index) in mmrait" :key="index" class="stroka" style="margin-right: 30px;">
                    <div class="flex">
                  <div class="top">{{ mmrai.top }}</div>
                  <div class="nick">{{ mmrai.nick }}</div></div>
                  <div class="skore">{{ mmrai.skore }}</div>
                
                </div>
                
            </div>
          </div>
          <div class="Block_footer">
            <img src="/../img/Line258.svg" alt="" class="Block_footer_imgRight">
            <button id="teamsBtn" class="blocka_button" style="height: 36px; width: 370px;">Подробнее</button>
            <img src="/../img/Line259.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="row_cont d-flex justify-content-center">
        <div class="Midle-top_container row " style="--bs-gutter-x:0;">
          <div class="display col-md-3" style="min-width: 440px;">
            <div class="BlockModle">
                <div class="BlockModle_head">
                    <img src="../img/Frame154.svg" alt="" class="BlockModle_head_img">
                    
                </div>
                <div class="Stroka_atatisticaTyrnirov_conyainer">
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">KINGDOM STUDENTS 1</div>
                        <div class="folse  ">ПРОШЕЛ</div>
                    </div>
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">KINGDOM 5</div>
                        <div class="true ">LIVE</div>
                    </div>
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">KINGDOM BIZNES</div>
                        <div class="Stroka_atatisticaTyrnirov_status ">22.02.2025</div>
                    </div>
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">KINGDOM MEDIA</div>
                        <div class="Stroka_atatisticaTyrnirov_status ">12.05.2025</div>
                    </div>
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">KINGDOM KLD</div>
                        <div class="Stroka_atatisticaTyrnirov_status ">10.08.2025</div>
                    </div>
        
                </div>
                <div class="button_containerr">
                <button id="teamsBtn" class="blocka_button" style=" margin-top: 110px; height:  36px; width: 370px;" >Показать больше</button>
            </div>
            </div>
        </div>
        <div class="display col-md-3" style="min-width: 440px;">
            <div class="BlockModle">
                <div class="BlockModle_head">
                    <img src="../img/Frame153.svg" alt="" class="BlockModle_head_img">
                    
                </div>
                <div class="koloni_container">
                    <div class="flex">
                  <div class="kolonka">Место</div>
                  <div class="kolonka " id="nick">Название команды</div></div>
                  <div class="kolonka margin">K/D</div>
            
                </div>
                <div class="reiting_container">
                  <div class="stroka_container" style="width: 370px;">
                    <div class="stroka" v-for="(mmrai, index) in mmrait" :key="index">
                        <div class="flex" >
                      <div class="top">{{ mmrai.top }}</div>
                      <div class="nick">{{ mmrai.nick }}</div></div>
                      <div class="skore" style="margin-right: 30px;">{{ mmrai.KD }}</div> 
                           </div>
                   
          
                  </div>
              
                </div>
                <div class="button_containerr" >
                <button id="teamsBtn" class="blocka_button" style="     margin-top: 5px;height:  36px; width: 370px;" >Показать больше</button>
            </div>
            </div>
        </div>
        <div class="display col-md-3" style="min-width: 440px;">
            <div class="BlockModle">
                <div class="BlockModle_head">
                    <img src="../img/Frame155.svg" alt="" class="BlockModle_head_img">
                 
                </div>
                <div class="Stroka_atatisticaTyrnirov_conyainer">
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">РКПЛ | KINGDOM STUDENTS</div>
                       
                    </div>
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">РКПЛ | KINGDOM 1</div>
                        
                    </div>
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">РКПЛ | KINGDOM BIZNES</div>
                        
                    </div>
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">РКПЛ | KINGDOM 2</div>
                      
                    </div>
                    <div class="Stroka_atatisticaTyrnirov">
                        <div class="Stroka_atatisticaTyrnirov_text">РКПЛ | KINGDOM MEDIA</div>
                        
                    </div>
        
                </div>
                <div class="button_containerr">
                <button id="teamsBtn" class="blocka_button" style=" margin-top: 110px; height:  36px; width: 370px;" >Показать больше</button>
            </div>
            </div>
            </div>
            <div class="display col-md-3" style="min-width: 440px;">
            <div class="BlockModle">
                <div class="BlockModle_head">
                    <img src="../img/Frame156.svg" alt="" class="BlockModle_head_img">
                   
                </div>
                <div class="koloni_container">
                    <div class="flex">
                  <div class="kolonka">Место</div>
                  <div class="kolonka " id="nick">Название команды</div></div>
                  <div class="kolonka margin">K/D</div>
            
                </div>
                <div class="reiting_container">
                  <div class="stroka_container" style="width: 370px;">
                    <div class="stroka" v-for="(mmrai, index) in mmrait" :key="index">
                        <div class="flex" >
                      <div class="top">{{ mmrai.top }}</div>
                      <div class="nick">{{ mmrai.nick }}</div></div>
                      <div class="skore" style="margin-right: 30px;">{{ mmrai.KD }}</div> 
                           </div>
                    
          
          
                  </div>
                
                </div>
                <div class="button_containerr" style="margin-top: 5px;">
                <button id="teamsBtn" class="blocka_button" style="height:  36px; width: 370px;" >Показать больше</button>
            </div>
            </div>
           
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-bottom: 20px;">
        <div class="box">
          <div class="group">
            <div class="overlap-group">
              <div class="text-wrapper">KINGDOM 5</div>
              <div class="div">LIVE</div>
              <div class="group-2">
                <div class="group-3">
                  <div class="frame"><div class="text-wrapper-2">{{team2}}</div></div>
                  <div class="rectangle">1</div>
                </div>
                <div class="group-4">
                  <div class="div-wrapper"><div class="text-wrapper-3">{{team1}}</div></div>
                  <div class="rectangle">0</div>
                </div>
              </div>
              <div class="group-5">
                <div class="group-3">
                  <div class="frame-2"><div class="text-wrapper-4">{{team2}}</div></div>
                  <div class="rectangle-2"></div>
                </div>
                <div class="group-4">
                  <div class="frame-2"><div class="text-wrapper-5">{{team1}}</div></div>
                  <div class="rectangle-2"></div>
                </div>
              </div>
              <div class="group-6">
                <div class="group-3">
                  <div class="frame-3"><div class="text-wrapper-6">{{team2}}</div></div>
                  <div class="rectangle"></div>
                </div>
                <div class="group-4">
                  <div class="frame-3"><div class="text-wrapper-7">{{team1}}</div></div>
                  <div class="rectangle"></div>
                </div>
              </div>
              <div class="group-7">
                <div class="group-3">
                  <div class="frame-2"><div class="text-wrapper-8">{{team2}}</div></div>
                  <div class="rectangle-2"></div>
                </div>
                <div class="group-4">
                  <div class="frame-2"><div class="text-wrapper-9">{{team1}}</div></div>
                  <div class="rectangle-2"></div>
                </div>
              </div>
              <div class="group-8">
                <div class="group-3">
                  <div class="frame-3"><div class="text-wrapper-10">{{team2}}</div></div>
                  <div class="rectangle"></div>
                </div>
                <div class="group-4">
                  <div class="frame-3"><div class="text-wrapper-11">{{team1}}</div></div>
                  <div class="rectangle"></div>
                </div>
              </div>
              <div class="group-9">
                <div class="group-3">
                  <div class="frame-2"><div class="text-wrapper-12">{{team2}}</div></div>
                  <div class="rectangle-2"></div>
                </div>
                <div class="group-4">
                  <div class="frame-2"><div class="text-wrapper-13">{{team1}}</div></div>
                  <div class="rectangle-2"></div>
                </div>
              </div>
              <div class="group-10">
                <div class="group-3">
                  <div class="frame-3"><div class="text-wrapper-14">{{team2}}</div></div>
                  <div class="rectangle"></div>
                </div>
                <div class="group-4">
                  <div class="frame-3"><div class="text-wrapper-15">{{team1}}</div></div>
                  <div class="rectangle"></div>
                </div>
              </div>
              <div class="group-11">
                <div class="group-3">
                  <div class="frame-2"><div class="text-wrapper-16">{{team2}}</div></div>
                  <div class="rectangle-2"></div>
                </div>
                <div class="group-4">
                  <div class="frame-2"><div class="text-wrapper-17">{{team1}}</div></div>
                  <div class="rectangle-2"></div>
                </div>
              </div>
              <div class="overlap">
                <img class="img" src="../img/Kprona.svg" />
                <img class="vector" src="../img/Setka.svg" />
                <div class="group-12">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-13">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-14">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-15">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-16">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-17">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-18">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-19">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-20">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-21">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-22">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-23">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-24">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="group-25">
                  <div class="rectangle"></div>
                  <div class="rectangle-3"></div>
                </div>
                <div class="rectangle-4"></div>
              </div>
              <div class="group-26">
                <div class="property-frame"><div class="blocka_button" style="margin-top: 12px;">Положение</div></div>
                <div class="property-frame-2"><div class="blocka_button" style="margin-top: 12px;">Регламент</div></div>
                <div class="component"><div class="blocka_button" style="margin-top: 12px;">Инструкция</div></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="row_cont">
            <div class="row d-flex justify-content-center" style="--bs-gutter-x:0;">
                <div class="col-md-5  d-flex justify-content-center" style="max-width: 730px;" >
                    <div class="vstrechi_container">
                        <div class="vstrechi_head">
                          
                          <div class="vstrechi_head_text">
                            <img src="../img/Frame63.svg" alt="" class="vstrechi_head_img">
                            <div class="vstrechi_head_text1">Встречи</div>
                            <div class="vstrechi_head_palka"></div>
                            <div class="vstrechi_head_text1">Расписание</div>
                          </div>
                          
                        </div>
                        <div  class="vstrechi_content">
                            <div v-for="(vstrecha, index) in vstrechi" :key="index" class="vstrechi_content_block">
                              <div class="vstrechi_content_block_left">
                                <div class="vstrechi_content_block_left_text">{{ vstrecha.team1}}</div>
                                <img src="../img/logo_header.svg" alt="" class="vstrechi_content_block_left_img">
                              </div>
                              <div class="vstrechi_content_block_center">{{vstrecha.skore1}}:{{vstrecha.skore2}}</div>
                              <div class="vstrechi_content_block_right">
                                <div class="vstrechi_content_block_right_flex">
                                  <img src="../img/logo_header.svg" alt="" class="vstrechi_content_block_right_img">
                                  <div class="vstrechi_content_block_right_text">{{vstrecha.team2}}</div>
                                </div>
                                <div class="Date-status_live">LIVE</div>
                              </div>
                            </div>
                          
                          
                        
                          
                         
                        
                      
                    
                            <div class="vstrechi_content_block">
                              <div class="vstrechi_content_block_left">
                                <div class="vstrechi_content_block_left_text">Team Raised</div>
                                <img src="../img/logo_header.svg" alt="" class="vstrechi_content_block_left_img">
                              </div>
                              <div class="vstrechi_content_block_center">VS</div>
                              <div class="vstrechi_content_block_right">
                                <div class="vstrechi_content_block_right_flex">
                                  <img src="../img/logo_header.svg" alt="" class="vstrechi_content_block_right_img">
                                  <div class="vstrechi_content_block_right_text">G6</div>
                                </div>
                                <div class="Date-status">
                                  <div class="Date-status_date">22.01.2025</div>
                                  <div class="Date-status_date">15:00</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="vstrechi_container_end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="157" height="12" viewBox="0 0 157 12" fill="none">
                              <path d="M1 5C0.447715 5 -4.82823e-08 5.44772 0 6C4.82823e-08 6.55228 0.447715 7 1 7L1 5ZM156.773 5.99999L151 0.226484L145.227 5.99999L151 11.7735L156.773 5.99999ZM1 7L151 6.99999L151 4.99999L1 5L1 7Z" fill="#272A31"/>
                              </svg>
                            <button id="teamsBtn" class="blocka_button" style="  height:  36px; width: 320px;" >Показать больше</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="147" height="12" viewBox="0 0 147 12" fill="none">
                              <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM146 7.00001C146.552 7.00001 147 6.5523 147 6.00001C147 5.44773 146.552 5.00001 146 5.00001L146 7.00001ZM6 7L146 7.00001L146 5.00001L6 5L6 7Z" fill="#272A31"/>
                              </svg>
                          </div>
                      </div>
                </div>
                <div class="col-md-7 d-flex justify-content-center" style="max-width: 1030px;">
                    <div class="draft">
                        <div class="vstrechi_head">
                          
                          <div class="vstrechi_head_text">
                            <img src="../img/Frame63.svg" alt="" class="vstrechi_head_img">
                            <div class="vstrechi_head_text1">Итоги</div>
                            <div class="vstrechi_head_palka"></div>
                            <div class="vstrechi_head_text1">Статистика</div>
                          </div>
                          
                        </div>
                        <div class="voz_contsiner">
                          <div class="voz_head">ВОЗ</div>
                          <div class="voz_content">
                            <div class="voz_box">
                              <div class="vox_true"><img src="../img/MIRAGE.png" alt="" class="vox_box_bg_img"></div>
                              <img src="" alt="" class="voz_box_text_img">
                              <div class="voz_text_false">{{ban}}</div>
                            </div>
                            <div class="voz_box">
                              <div class="vox_true"><img src="../img/VERTIGO.png" alt="" class="vox_box_bg_img"></div>
                              <img src="" alt="" class="voz_box_text_img">
                              <div class="voz_text_false">{{ban}}</div>
                            </div>
                            <div class="voz_box">
                              <div class="vox_true"><img src="../img/OWERPASS.png" alt="" class="vox_box_bg_img"></div>
                              <img src="" alt="" class="voz_box_text_img">
                              <div class="voz_text_true">{{pick}}</div>
                            </div>
                            <div class="voz_box">
                              <div class="vox_true"><img src="../img/ANCEINT.png" alt="" class="vox_box_bg_img"></div>
                              <img src="" alt="" class="voz_box_text_img">
                              <div class="voz_text_true">{{pick}}</div>
                            </div>
                            <div class="voz_box">
                              <div class="vox_true"><img src="../img/AZTEC.png" alt="" class="vox_box_bg_img"></div>
                              <img src="" alt="" class="voz_box_text_img">
                              <div class="voz_text_false">{{ban}}</div>
                            </div>
                            <div class="voz_box">
                              <div class="vox_true"><img src="../img/INFERNO.png" alt="" class="vox_box_bg_img"></div>
                              <img src="" alt="" class="voz_box_text_img">
                              <div class="voz_text_false">{{ban}}</div>
                            </div>
                            <div class="voz_box">
                              <div class="vox_true"><img src="../img/NUKE.png" alt="" class="vox_box_bg_img"></div>
                              <img src="" alt="" class="voz_box_text_img">
                              <div class="voz_text_true">ИГРОВАЯ КАРТА</div>
                            </div>
                          </div>
                          <div class="voz_buton_container">
                            <div class="mini_butin_container">
                            <button id="teamsBtn" class="blocka_button" style=" margin-bottom:5px ; height: 36px; width: 132px;">Матч 1</button>
                            <div class="voz_text_falsee">закончен</div>
                            </div>
                            <div class="mini_butin_container">
                              <button id="teamsBtn" class="blocka_button" style=" margin-bottom:5px ;height: 36px; width: 132px;">Матч 2</button>
                              <div class="voz_text_truee">идет</div>
                              </div>
                              <div class="mini_butin_container">
                                <button id="teamsBtn" class="blocka_button" style=" margin-bottom:5px ;height: 36px; width: 133px;">Матч 3</button>
                                <div class="voz_text_continue">закончен</div>
                                </div>
                          </div>
                          <div class="table_container">
                          <div class="table_container_head">
                            <div class="table_container_head_team_1">{{team2}}</div>
                            <div style="display: flex; align-items: center; align-self: center;">
                            <div class="table_container_head_skore_1">{{skore_team1}}</div>
                            <div class="table_container_head_skore_matc">{{skore_team1_matc}}:{{skore_team2_matc}}</div>
                            <div class="table_container_head_skore_2">{{skore_team2}}</div>
                            </div>
                            <div class="table_container_head_team_2">{{team1}}</div>
                          </div>
                          <div class="table_content">
                            <div class="table_content_table1">
                              <div class="table_content_table1_head">
                                <div class="table_content_table1_head_stats">K</div>
                                <div class="table_content_table1_head_stats">D</div>
                                <div class="table_content_table1_head_stats">A</div>
                                <div class="table_content_table1_head_stats" style="margin-left: 2px;">K/D</div>
                                
                              </div>
                              <div v-for="(itog, index) in itogi" :key="index" class="table_content_row">
                                <div class="table_content_row_text_container">
                                <div class="table_content_row_number">{{itog.num}}</div>
                                <div class="table_content_row_text">{{itog.nick}}</div>
                                </div>
                                <div class="table_content_row_blox_container">
                                  <div class="table_content_row_blck">{{itog.K}}</div>
                                  <div class="table_content_row_blck">{{itog.D}}</div>
                                  <div class="table_content_row_blck">{{itog.A}}</div>
                                  <div class="table_content_row_blck">{{itog.KD}}</div>
                                </div>
                              </div>
                             
                       
                              
                            </div>
                            <img src="../img/line-270.svg" alt="" class="table_content_img">
                            <div class="table_content_table1">
                              <div class="table_content_table1_head">
                                <div class="table_content_table1_head_stats">K</div>
                                <div class="table_content_table1_head_stats">D</div>
                                <div class="table_content_table1_head_stats">A</div>
                                <div class="table_content_table1_head_stats" style="margin-left: 2px;">K/D</div>
                                
                              </div>
                              <div v-for="(itog, index) in itogi" :key="index" class="table_content_row">
                                <div class="table_content_row_text_container">
                                <div class="table_content_row_number">{{itog.num}}</div>
                                <div class="table_content_row_text">{{itog.nick}}</div>
                                </div>
                                <div class="table_content_row_blox_container">
                                  <div class="table_content_row_blck">{{itog.K}}</div>
                                  <div class="table_content_row_blck">{{itog.D}}</div>
                                  <div class="table_content_row_blck">{{itog.A}}</div>
                                  <div class="table_content_row_blck">{{itog.KD}}</div>
                                </div>
                              </div>
                             
                             
                             
                              
                            </div>
                            
                          </div>
                    
                    
                          </div>
                          </div>
                        </div>
                </div>
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
        team1:'G6',
        team2:'Team Raised',
        ban:'БАН - КОМАНДА 1',
        pick:'ПИК - КОМАНДА 2',
        skore_team1:'1',
        skore_team2:'0',
        skore_team1_matc:'13',
        skore_team2_matc:'7',
    itogi:[
        {num:1, nick:'Maaak', K:33, D:4, A:15, KD:1.33,},
        {num:2, nick:'Maaak', K:33, D:4, A:15, KD:1.33,},
        {num:3, nick:'Maaak', K:33, D:4, A:15, KD:1.33,},
        {num:4, nick:'Maaak', K:33, D:4, A:15, KD:1.33,},
        {num:5, nick:'Maaak', K:33, D:4, A:15, KD:1.33,},
    
    ],
        
      mmrait: [
        {top: 1, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 2, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 3, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 4, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 5, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 6, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 7, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 8, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 9, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 10, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 11, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 12, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 13, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 14, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
        {top: 15, nick: 'Fan', skore: 3245, kode: 'KLD', KD: '1,99',},
      ],
      vstrechi: [
        {team1: 'G6', team2: 'Team Raised', skore1: 1, skore2: 0, vs: 'VS',},
        {team1: 'G6', team2: 'Team Raised', skore1: 1, skore2: 0, vs: 'VS',},
        {team1: 'G6', team2: 'Team Raised', skore1: 1, skore2: 0, vs: 'VS',},
        {team1: 'G6', team2: 'Team Raised', skore1: 1, skore2: 0, vs: 'VS',},
        {team1: 'G6', team2: 'Team Raised', skore1: 1, skore2: 0, vs: 'VS',},
        {team1: 'G6', team2: 'Team Raised', skore1: 1, skore2: 0, vs: 'VS',},
        {team1: 'G6', team2: 'Team Raised', skore1: 1, skore2: 0, vs: 'VS',},
        {team1: 'G6', team2: 'Team Raised', skore1: 1, skore2: 0, vs: 'VS',},
      ],
    };
  },
};


</script>

<style scoped>
/* Стилизация полосы прокрутки */
/* Добавил сюда стили прокрутки, так ка с админ-панелью они почему-то перестали работать */
::-webkit-scrollbar {
        width: 5px;
        background: #151319;
    }
    
    /* Стилизация ползунка */
    ::-webkit-scrollbar-thumb {
        border-radius: 2.5px;
        background: #EAECEC;
    }
 :root {
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
  }
.dropdavn_selector_cont{
    position: absolute;
    z-index: 1;
    flex-direction: column;
    display: flex;
    justify-content: start;
    margin-left: 70px;
    margin-bottom: 13px;
  
  }
  .dropdavn_selector{
    cursor: pointer;
   margin-top: 20px;
    display: flex;
  width: 257px;
  height: 45px;
  padding: 7px 25px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--default-main, #1E1C24);
    align-items: center;
  }
  .dropdavn_selector_text{
    margin-right: 30px;
  
    color: var(--default-text4, #787C87);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .custom_dropdown_menu {
    position: relative;
    width: 257px;
    background-color: #1E1C24;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
  
    z-index: 10; /* Устанавливаем z-index для правильного отображения над другими элементами */
  }
  
  .custom_dropdown_menu .custom_dropdown_item {
    padding: 10px 15px;
    color: var(--default-text4, #787C87);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .custom_dropdown_menu .custom_dropdown_item:hover {
    background-color: #EAECEC; /* Подсветка при наведении */
  }
  
  .dropdavn_selector_cont:hover main {
    position: relative;
    top: -100px;
  }
       main{margin-top: 80px;}
       .Block_container{
          margin-bottom: 20px;
          margin-right: 20px;
          width: 880px;
  height: 510px;
      flex-shrink: 0;
      border-radius: 10px;
      border-bottom: 2px solid var(--default-main-logo, #FD3D48);
      background: var(--default-main, #1E1C24);
        }
        .block_HeadImg{
       
          margin-left: 30px;
          margin-right: 15px;
        }
        .block_HeadText{
          margin-top: 20px;
       display: flex;
       justify-content: center;
       align-items: center;
      flex-shrink: 0;
      color: var(--default-main-text, #EAECEC);
      font-family: Gilroy;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
        }
        .hr_block{
          margin-left: 30px;
          margin-top: 20px;
          margin-right: 30px;
          margin-bottom: 10px;
          
      height: 1px;
      flex-shrink: 0;
      stroke-width: 2px;
      background-color: var(--default-bloki, #272A31);
        }
        .block_ButtonContainer{
          display: flex;
          justify-content: space-evenly;
        }
        .blocka_button{
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          width: 51px;
      height: 17px;
      flex-shrink: 0;
      color: var(--default-main-text, #EAECEC);
      font-family: Gilroy;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
          text-align: center;
      width: 175px;
      height: 31px;
    
      
      align-items: center;
      flex-shrink: 0;
      border-radius: 7px;
      border: 2px solid var(--button-default, #272A31);
      margin-bottom: 10px;
        }
        .blocka_button:hover:not(.active) {
          align-items: center;
          justify-content: center;
         display: flex;
          background: var(--button-hover, #242229);
          border: none;
        }
        .blocka_button:active{
          align-items: center;
          justify-content: center;
         display: flex;
          background: var(--button-active, #FD3D48);
      
        }
        .containerBloksL{
          margin-left: 70px;
          margin-top: 70px;
        }
        .kolonka{
          color: var(--default-text5, #4A4D55);
      font-family: Gilroy;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 10px;
        }
      
        .stroka:first-child{
          background: var(--gradient-placement-gold_placement, linear-gradient(90deg, #F90 -6.23%, rgba(36, 34, 41, 0.00) 79.28%), #242229);
        }
        .stroka:nth-child(2){
          background: var(--gradient-placement-silver_placement, linear-gradient(90deg, #8E91A7 -6.23%, rgba(36, 34, 41, 0.00) 79.28%), #242229);
        }
        .stroka:nth-child(3){
          background: var(--gradient-placement-bronze_placement, linear-gradient(90deg, #A86243 -6.23%, rgba(36, 34, 41, 0.00) 79.28%), #242229);
        }
        .active {
          background: var(--button-active, #FD3D48);
        }
        .nickK{
          color: var(--default-main-text, #EAECEC);
          font-family: Gilroy;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        .containerBlokR{
          margin-right: 70px;
          margin-top: 70px;
        }
        .block_right_container{
          display: flex;
        }
        .block_left{
          display: flex;
          
          flex-direction: column;
          align-items: center;
          width: 80px;
      height: 143px;
      flex-shrink: 0;
      border-radius: 7px;
      border-left: 2px solid var(--default-main-logo, #FD3D48);
      background: var(--default-bloki, #272A31);
        }
        .block_left_img{
          margin-top: 20px;
        }
        .pts{
          margin-top: 11px;
          color: var(--default-main-text, #EAECEC);
      font-family: Gilroy;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
        }
        .Reiting{
          margin-top: 2px;
          color: var(--default-main-text, #EAECEC);
      font-family: Gilroy;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-decoration-line: underline;
        }
        .block_center{
          width: 210px;
        }
        .dropdown_block {
          background-color: transparent;
          margin-left: 30px;
          margin-bottom: 10px;
          width: 320px;
          display: inline-block;
      padding: 9px 25px 5px 25px;
      justify-content: center;
      align-items: center;
      gap: 42px;
      border-radius: 7px;
      background: var(--default-bloki2, #242229);
        }
      
        .dropdown-content_block {
          width: 335px;
          display: none;
          position: absolute;
         
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }
      
        .dropdown-content_block a {
          position: relative;
          left: -25px;
          background: var(--default-bloki2, #242229);
          color:#787C87;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }
        .dropdown-content_block a:last-child {
         border-bottom-left-radius: 7px;
         border-bottom-right-radius: 7px;
        }
        .dropdown-content_block a:hover {
          background-color: #f1f1f1;
        }
      
        .dropdown_block:hover .dropdown-content_block {
          display: block;
        }
        .dropbtn_block{
          width: 100%;
          align-items: center;
          display: flex;
          justify-content: space-between;
          color:#787C87;
      
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
           margin: 0;
          padding: 0;
          border: none;
          background: none;
         
          cursor: pointer;
        }
        .dropbtn_img{
          position: relative;
          left: 15px;
          top: -3px;
        }
        .koloni_container{
          margin-top: 10px;
          margin-left: 30px;
          margin-right: 20px;
          justify-content: space-between;
          display: flex;
      
        }
        .stroka{
          align-items: center;
          justify-content: space-between;
          display: flex;
          max-width: 820px;
      width: 100%;
      height: 45px;
      flex-shrink: 0;
      border-radius: 7px;
      background: var(--default-bloki2, #242229);
      margin-bottom: 5px;
        }
        .top{
          margin-left: 20px;
          color: var(--default-main-text, #EAECEC);
      font-family: Gilroy;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
        }
        .nick{
          width: 100px;
          color: var(--default-main-text, #EAECEC);
      font-family: Gilroy;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
        }
      .skore_cont{
        width: 100%;
        display: flex;
        justify-content: end;
      }
        .skore{
          margin-right: 113px;
         /* position: relative;
         left: -10px; */
         color: var(--default-main-text, #EAECEC);
      font-family: Gilroy;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
        }
        .profile{
          height: 12px;
        
        }
      
      
        .Block_container:first-child .stroka .nick{
          margin-right: 7px;
        }
        .Block_container .stroka .nick{
          margin-right: 25px; 
        }
        .BlockModle .stroka .nick{
          margin-right: 25px; 
        }
        .Block_container .stroka {
          justify-content: s;
        }
        .reiting_container{
          margin-left: 30px;
          height: 345px;
         margin-right: 13px;
          overflow: auto;
      }
  .raiting_container_top{
      justify-content: center;
      display: flex;
  }
  .flex{
      display: flex;
      width: 227px;
      justify-content: space-between;
  }
  .margin{
      margin-right: 37px;
  }
  .Block_footer{
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
  .folse{
      color: var(--default-main-logo, #FD3D48);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .true{
      color: var(--default-text2, #00FF5A);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .BlockModle{
    margin-right: 20px;
      width: 430px;
  height: 510px;
  flex-shrink: 0;
  border-radius: 10px;
  border-bottom: 2px solid var(--default-main-logo, #FD3D48);
  background: var(--default-main, #1E1C24);
  }
  .BlockModle_head{
      
      height: 70px;
      display: flex;
      justify-content: start;
      align-items: center;
      border-bottom: 1px solid #272A31;
      margin-left: 30px;
      margin-right: 30px;
     
  color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  
  }
  .BlockModle_head_img{
      margin-right: 15px;
  }
  .Stroka_atatisticaTyrnirov_conyainer{
      display: flex;
      flex-direction: column;
  }
  .Stroka_atatisticaTyrnirov{
      margin-left: 30px;
      margin-right: 30px;
      margin-top: 5px;
      display: flex;
  
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  background: var(--default-bloki2, #242229);
  }
  .Stroka_atatisticaTyrnirov:first-child{
      margin-left: 30px;
      margin-right: 30px;
  margin-top: 10px;
  }
  .Stroka_atatisticaTyrnirov_text{
      color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .Stroka_atatisticaTyrnirov_status{
      color: var(--default-text5, #4A4D55);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .Midle-top_container{
      display: flex;
      justify-content: center;
      margin-bottom:20px ;
  }
  .button_containerr{
      display: flex;
      align-items: end;
      justify-content: center;
  
  }
  .display{
      display: flex;
      justify-content: space-around;
  }
  .TurnirnayaTable{
    width: 1780px;
  height: 636px;
  flex-shrink: 0;
  border-radius: 10px;
  border-bottom: 2px solid var(--default-main-logo, #FD3D48);
  background: var(--default-main, #1E1C24);
  margin-bottom: 20px;
  }
  .TurnirnayaTable_head{
    width: 1780px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
  }
  .TurnirnayaTable_hrad_name{
    color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    display: flex;
    justify-content: center;
  }
  .TurnirnayaTable_hrad_status{
    color: var(--default-text2, #00FF5A);
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
     display: flex;
    justify-content: center;
  }
  
  
  /* Турнирная сктка */
  .box {

    width: 1780px;
    height: 636px;
  }
  
  .box .group {
   
    width: 1784px;
    height: 636px;
    top: 0;
    left: 0;
  }
  
  .box .overlap-group {
    position: relative;
    width: 1780px;
    height: 636px;
    background-color:#1E1C24;
    border-radius: 10px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #FD3D48;
  }
  
  .box .text-wrapper {
    position: absolute;
   
    top: 28px;
    left: 833px;
    font-family: Gilroy;;
    font-weight: 500;
    color: var(--defaultmain-text);
    font-size: 20px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .div {
    position: absolute;
    width: 38px;
    top: 55px;
    left: 868px;
    font-family: Gilroy;;
    font-weight: 500;
    color: var(--defaulttext-2);
    font-size: 20px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .group-2 {
    position: absolute;
    width: 183px;
    height: 82px;
    top: 107px;
    left: 28px;
  }
  
  .box .group-3 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 0;
    left: 0;
  }
  
  .box .frame {
  /*  padding: 15px 20px;*/
    left: 0;
    display: flex;
    width: 147px;
    height: 36px;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 0;
    background-color: #242229;
    border-radius: 7px 0px 0px 7px;
    overflow: hidden;
    border-left-width: 1px;
    border-left-style: solid;
    border-color: #FD3D48;
  }
  
  .box .text-wrapper-2 {
    margin-left: 20px;
    position: relative;
   
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .rectangle {
    color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    top: 0;
    left: 147px;
    background-color:#272A31;
    border-radius: 0px 7px 7px 0px;
    position: absolute;
    height: 36px;
  }
  
  .box .group-4 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 46px;
    left: 0;
  }
  
  .box .div-wrapper {
   
    left: 0;
    display: flex;
    width: 147px;
    height: 36px;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 0;
    background-color: #242229;
    border-radius: 7px 0px 0px 7px;
    overflow: hidden;
    border-left-width: 1px;
    border-left-style: solid;
    border-color: #FD3D48;
  }
  
  .box .text-wrapper-3 {
    margin-left: 20px;
    position: relative;
  
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .group-5 {
    position: absolute;
    width: 183px;
    height: 82px;
    top: 107px;
    left: 1565px;
  }
  
  .box .frame-2 {
    
    left: 36px;
    transform: rotate(180deg);
    display: flex;
    width: 147px;
    height: 36px;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 0;
    background-color: #242229;
    border-radius: 7px 0px 0px 7px;
    overflow: hidden;
    border-left-width: 1px;
    border-left-style: solid;
    border-color: #FD3D48;
  }
  
  .box .text-wrapper-4 {
    margin-right: 20px;
    position: relative;
   left: 20px;
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    transform: rotate(180deg);
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .rectangle-2 {
     color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    top: 0;
    left: 147px;
    background-color:#272A31;
    border-radius: 0px 7px 7px 0px;
    position: absolute;
    height: 36px;
    width: 36px;
    top: 0;
    left: 0;
    background-color:#272A31;
    border-radius: 0px 7px 7px 0px;
    transform: rotate(180deg);
    position: absolute;
    height: 36px;
  }
  
  .box .text-wrapper-5 {
    position: relative;
   left: 20px;
    margin-top: -5px;
    margin-bottom: -3px;
    transform: rotate(180deg);
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .group-6 {
    position: absolute;
    width: 183px;
    height: 82px;
    top: 219px;
    left: 28px;
  }
  
  .box .frame-3 {
  
    left: 0;
    display: flex;
    width: 147px;
    height: 36px;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 0;
    background-color: #242229;
    border-radius: 7px 0px 0px 7px;
    overflow: hidden;
    border-left-width: 1px;
    border-left-style: solid;
    border-color: #FD3D48;
  }
  
  .box .text-wrapper-6 {
    margin-left: 20px;
    position: relative;
  
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .text-wrapper-7 {
    margin-left: 20px;
    position: relative;
    
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .group-7 {
    position: absolute;
    width: 183px;
    height: 82px;
    top: 219px;
    left: 1565px;
  }
  
  .box .text-wrapper-8 {
    position: relative;
  left: 20px;
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    transform: rotate(180deg);
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .text-wrapper-9 {
    position: relative;
    left: 20px;
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    transform: rotate(180deg);
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .group-8 {
    position: absolute;
    width: 183px;
    height: 82px;
    top: 331px;
    left: 28px;
  }
  
  .box .text-wrapper-10 {
    margin-left: 20px;
    position: relative;
    
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .text-wrapper-11 {
   
    position: relative;
    margin-left: 20px;
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .group-9 {
    position: absolute;
    width: 183px;
    height: 82px;
    top: 331px;
    left: 1565px;
  }
  
  .box .text-wrapper-12 {
    position: relative;
    left: 20px;
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    transform: rotate(180deg);
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .text-wrapper-13 {
    position: relative;
    left: 20px;
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    transform: rotate(180deg);
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .group-10 {
    position: absolute;
    width: 183px;
    height: 82px;
    top: 443px;
    left: 28px;
  }
  
  .box .text-wrapper-14 {
    margin-left: 20px;
    position: relative;
  
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .text-wrapper-15 {
    margin-left: 20px;
    position: relative;
    
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .group-11 {
    position: absolute;
    width: 183px;
    height: 82px;
    top: 443px;
    left: 1565px;
  }
  
  .box .text-wrapper-16 {
    position: relative;
   left: 20px;
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    transform: rotate(180deg);
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .text-wrapper-17 {
    position: relative;
   left: 20px;
    height: 14px;
    margin-top: -5px;
    margin-bottom: -3px;
    transform: rotate(180deg);
    font-family: Gilroy;
    font-weight: 700;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .overlap {
    position: absolute;
    width: 1344px;
    height: 383px;
    top: 126px;
    left: 218px;
  }
  
  .box .group-12 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 6px;
    left: 25px;
  }
  
  .box .rectangle-3 {
    width: 147px;
    top: 0;
    left: 0;
    background-color: #242229;
    border-radius: 7px 0px 0px 7px;
    border-left-width: 1px;
    border-left-style: solid;
    border-color: #FD3D48;
    position: absolute;
    height: 36px;
  }
  
  .box .group-13 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 6px;
    left: 1136px;
    transform: rotate(180deg);
  }
  
  .box .group-14 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 174px;
    left: 451px;
  }
  
  .box .group-15 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 174px;
    left: 710px;
    transform: rotate(180deg);
  }
  
  .box .group-16 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 62px;
    left: 238px;
  }
  
  .box .group-17 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 62px;
    left: 923px;
    transform: rotate(180deg);
  }
  
  .box .group-18 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 286px;
    left: 238px;
  }
  
  .box .group-19 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 286px;
    left: 923px;
    transform: rotate(180deg);
  }
  
  .box .group-20 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 118px;
    left: 25px;
  }
  
  .box .group-21 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 118px;
    left: 1136px;
    transform: rotate(180deg);
  }
  
  .box .group-22 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 230px;
    left: 25px;
  }
  
  .box .group-23 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 230px;
    left: 1136px;
    transform: rotate(180deg);
  }
  
  .box .group-24 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 342px;
    left: 25px;
  }
  
  .box .group-25 {
    position: absolute;
    width: 183px;
    height: 36px;
    top: 342px;
    left: 1136px;
    transform: rotate(180deg);
  }
  
  .box .rectangle-4 {
    width: 183px;
    top: 80px;
    left: 580px;
    background-color: #242229;
    border-radius: 7px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #FD3D48;
    position: absolute;
    height: 36px;
  }
  
  .box .img {
    position: absolute;
    width: 42px;
    height: 35px;
    top: 30px;
    left: 651px;
  }
  
  .box .vector {
    position: absolute;
    width: 1344px;
    height: 383px;
    top: 0;
    left: 0;
  }
  
  .box .group-26 {
    position: absolute;
    width: 660px;
    height: 36px;
    top: 568px;
    left: 558px;
  }
  
  .box .property-frame {
    left: 0;
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
    gap: 10px;
   height: 36px;
    position: absolute;
    top: 0;
    border-radius: 7px;
    overflow: hidden;
  
    
  }
  
  .box .text-wrapper-18 {
  
    margin-left: -36.5px;
    margin-right: -36.5px;
    position: relative;
    height: 16px;
    margin-top: -2px;
    font-family: Gilroy;;
    font-weight: 500;
    color: var(--defaultmain-text);
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .property-frame-2 {
    left: 230px;
  
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
    gap: 10px;
   height: 36px;
    position: absolute;
    top: 0;
    border-radius: 7px;
    overflow: hidden;
  
  
  }
  
  .box .text-wrapper-19 {
  
    margin-left: -33.5px;
    margin-right: -33.5px;
    position: relative;
    height: 16px;
    margin-top: -2px;
    font-family: Gilroy;;
    font-weight: 500;
    color: var(--defaultmain-text);
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .box .component {
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 36px;
  
    position: absolute;
    top: 0;
    left: 460px;
    border-radius: 7px;
    overflow: hidden;
   
  
  }
  
  .box .text-wrapper-20 {
  
    margin-left: -38.5px;
    margin-right: -38.5px;
    position: relative;
    height: 16px;
    margin-top: -2px;
    font-family: Gilroy;;
    font-weight: 500;
    color: var(--defaultmain-text);
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  :root {
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
  }
  .vstrechi_container{
    width: 730px;
  height: 720px;
  flex-shrink: 0;
  border-radius: 10px;
  border-bottom: 2px solid var(--default-main-logo, #FD3D48);
  background: var(--default-main, #1E1C24);
  margin-bottom: 20px;
  }
  .vstrechi_head{
    margin-right: 30px;
    margin-left: 30px;
    height: 70px;
    display: flex;
    justify-content: center;
   flex-direction: row;
    border-bottom: 1px solid #272A31;
  }
  .vstrechi_head_text{
    margin-top: 25px;
    display: flex;
    height: 25px;
    align-items: center;
  }
  .vstrechi_head_text1{
    margin-left: 15px;
    color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .vstrechi_head_palka{
    margin-left: 15px;
    height: 27px;
    border-radius: 50%;
    width: 2px;
    background-color: #272A31;
  }
  .vstrechi_content{
    width: 721px;
    margin-right: 13px;
    margin-top: 10px;
    overflow: auto;
    height: 580px;
    display: flex;
    flex-direction: column;
  }
  .vstrechi_content_block{
    margin-bottom:5px ;
    display: flex;
    margin-left: 30px;
    width: 670px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 7px;
  border-right: 2px solid var(--button-active, #FD3D48);
  border-left: 2px solid var(--button-active, #FD3D48);
  background: var(--default-bloki2, #242229);
  }
  .vstrechi_content_block_left_text{
    color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
  .vstrechi_content_block_left_img{
    margin-right: 15px;
    margin-bottom: 5px;
    margin-left: 15px;
    height: 30px;
    width: 30px;
  }
  .vstrechi_content_block_left{
    height: 60px;
    width:310px ;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .vstrechi_content_block_center{
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  background: var(--default-bloki, #272A31);
  }
  .vstrechi_content_block_right{
    height: 60px;
    width:310px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .vstrechi_content_block_right_text{
  
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .vstrechi_content_block_right_img{
    margin-right: 15px;
    margin-bottom: 5px;
    margin-left: 15px;
    height: 30px;
    width: 30px;
  }
  .Date-status_live{
    margin-right: 20px;
    color: var(--default-text2, #00FF5A);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .vstrechi_content_block_right_flex{
    display: flex;
    align-items: center;
  }
  .Date-status{
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: end;
    color: var(--default-text5, #4A4D55);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .Date-status_date{
    color: var(--default-text5, #4A4D55);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .wrapper {
  
    width: 250px;
    height: 305px;
    position: relative;
    left: -300px;
    top: 130px;
  }
  .wrapper:hover{
    opacity: 1;
    pointer-events: all ;
  }
  
  .wrapper .block {
    position: relative;
    width: 258px;
    height: 305px;
    top: 0;
    left: -150px;
  }
  
  .wrapper .item-holder {
    position: relative;
    width: 250px;
    height: 305px;
    background-color: #151319cc;
    border-radius: 10px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-color: #FD3D48;
    backdrop-filter: blur(10px) brightness(100%);
    -webkit-backdrop-filter: blur(10px) brightness(100%);
  }
  
  .wrapper .title {
    width: 117px;
    top: 243px;
    left: 23px;
    color: var(--defaultmain-text);
    position: absolute;
    font-family: Gilroy;;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .wrapper .code {
    position: absolute;
    width: 26px;
    top: 8px;
    left: 212px;
    font-family: Gilroy;;
    font-weight: 500;
    color: var(--defaulttext-4);
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .wrapper .subtitle {
    position: absolute;
    width: 30px;
    top: 188px;
    left: 108px;
    font-family: "Gilroy-Semibold", Helvetica;
    font-weight: 400;
    color: var(--defaultmain-text);
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .wrapper .description {
    width: 112px;
    top: 263px;
    left: 23px;
    color: var(--defaultmain-text);
    position: absolute;
    font-family: Gilroy;;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .wrapper .group {
    position: absolute;
    width: 189px;
    height: 15px;
    top: 218px;
    left: 23px;
  }
  
  .wrapper .info {
    width: 115px;
    top: 0;
    left: 0;
    color: var(--defaulttext-4);
    position: absolute;
    font-family: Gilroy;;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
  .wrapper .image {
    position: absolute;
    width: 1px;
    height: 13px;
    top: 2px;
    left: 125px;
    object-fit: cover;
  }
  
  .wrapper .picture {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 23px;
    left: 48px;
  }
  .wrapper {
  
    position: relative;
    display: none;
    opacity: 0;
    pointer-events: none; /* Блок не принимает события мыши */
  }
  .stroka:first-child:hover .skore:first-child{
    margin-right: 300px;
  }
  .stroka:hover .wrapper {
    display: block;
    opacity: 1;
    pointer-events: all;
  }
  .space-between{
    width: 820px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info2{
    position: relative;
    top: 0;
    left: 130px;
    color: var(--defaulttext-4);
    position: absolute;
    font-family: Gilroy;;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  .wrapper:hover .skore:first-child {
  
    left: 250px; position: relative;
    
  }
  .draft{
    margin-left: 20px;
    width: 1030px;
  height: 720px;
  flex-shrink: 0;
  border-radius: 10px;
  border-bottom: 2px solid var(--default-main-logo, #FD3D48);
  background: var(--default-main, #1E1C24);
  }
  .container_niz{
    display: flex;
    justify-content: center;
  }
  .voz_head{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: var(--default-text5, #4A4D55);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .voz_content{
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    margin-left: 30px;
  }
  .voz_box{
    height: 154px;
  }
  .voz_text_false{
    position: relative;
    bottom: 20px;
    display: flex;
    justify-content: center;
    color: var(--default-main-logo, #FD3D48);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
  .voz_text_falsee{
    display: flex;
    justify-content: center;
    color: var(--default-main-logo, #FD3D48);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .voz_text_true{
    position: relative;
    bottom: 20px;
    display: flex;
    justify-content: center;
    color: var(--default-text2, #00FF5A);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
  .voz_text_truee{
    display: flex;
    justify-content: center;
    color: var(--default-text2, #00FF5A);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .mini_butin_container{
    margin-right: 10px;
    display: flex;
    flex-direction: column;
  
  }
  .voz_text_continue{
    display: flex;
    justify-content: center;
    color: var(--default-text5, #4A4D55);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .voz_buton_container{
    margin-top: 31px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
  }
  .table_container_head{
    justify-content: space-evenly;
    height: 36px;
    align-items: center;
    display: flex;
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 1px solid #272A31;
  
  }
  .table_container_head_team_1{
    display: flex;
    justify-content: center;
    width: 100px;
    color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  }
  .table_container_head_skore_1{
    color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
  .table_container_head_skore_matc{
    margin-left: 18px;
    margin-right: 18px;
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 7px 7px 0px 0px;
  background: var(--default-bloki, #272A31);
  }
  .table_container_head_skore_2{
    
   color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .table_container_head_team_2{
    display: flex;
    justify-content: center;
    width: 100px;
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .table_content{
    display: flex;
    justify-content: space-between;
    width: 970px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .table_content_table1_head{
    display: flex;
    justify-content: space-between;
    width: 181px;
    margin-top: 10px;
   margin-bottom: 10px;
    margin-left: 256px;
  }
  .table_content_table1_head_stats{
    color: var(--default-text5, #4A4D55);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  .table_content_row{
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 455px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 7px;
  background: var(--default-bloki2, #242229);
  }
  .table_content_row_text_container{
    display: flex;
    margin-left: 20px;
  
  }
  .table_content_row_number{
    margin-right: 20px;
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .table_content_row_text{
    color: var(--default-main-text, #EAECEC);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .table_content_row_blck{
    border-radius: 7px;
    color: var(--default-main-text, #EAECEC);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
  height: 45px;
  flex-shrink: 0;
  background: var(--default-bloki, #272A31);
  }
  .table_content_row_blck:first-child{
    margin-left: 0;
  }
  .table_content_row_blck:last-child{
    
    width: 67px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 0px 7px 7px 0px;
    background: var(--default-bloki, #272A31);
  }
  .table_content_row_blox_container{
    display: flex;
  }
  /* .table_content_table1{
    position: relative;
    bottom: 15px;
  } */
  .table_container{
    position: relative;
    bottom: 20px;
  }
  .button_container_head{
    display: flex;
  }
  .vstrechi_container_end{
    height: 36px;
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-right: 30px;
    margin-left: 30px;
  }
 
</style>