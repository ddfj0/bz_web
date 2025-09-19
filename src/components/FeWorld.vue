<template>
  <div class="main_area" :style="{ 'width': menuBar.isMobile ? 'calc(100vw - 6px)': '360px'}">

    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="pa-0 ma-0">
        <v-card class="mt-2" style="border: 1px solid #f1f4f6; ">
          <div class="d-flex justify-center mt-2" >
            <v-chip label>
                公历：{{bzYear}}-{{bzMonth}}-{{bzDay}} {{bzHour}}:{{bzMinute}}:{{bzSecond}} {{ bzXz }} ({{ boolSex?' 女 ':' 男 ' }})
            </v-chip>
          </div>
          <div class="d-flex justify-center mt-2">
            <v-chip label >
              农历：{{ lunarDate }}
              <v-btn class="ml-2"  variant="outlined" style="font-size: 12px; height: 24px; color: yellow;"  @click="bShowSelectDate=true;" >
                选择日期 
                </v-btn>

            </v-chip>
          </div>
          <div class="d-flex justify-center mt-2">
            <v-chip outlined label style="width: 60px;" class="pa-0 d-flex justify-center">
              年
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center">
              月
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center" color="yellow" >
              日
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center">
              时
            </v-chip>
            <v-chip outlined label style="width: 60px;" class="ml-1 pa-0 d-flex justify-center">
              大运
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center">
              流年
            </v-chip>
          </div>
          <div class="d-flex d-flex justify-center mt-1 ">
            <v-chip outlined label style="width: 60px; " class="pa-0 d-flex justify-center" >
              <div :style="{color: yearTgColor}">
                {{ yearTg }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: yearTgColor}">
                {{ shenYearTg }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center" >
              <div :style="{color: monthTgColor}">
                {{ monthTg }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: monthTgColor}">
                {{ shenMonthTg }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class=" pa-0 d-flex justify-center" >
              <div :style="{color: dayTgColor}">
                {{ dayTg }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: dayTgColor}">
                {{ shenDayTg }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center" >
              <div :style="{color: hourTgColor}">
                {{ hourTg }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: hourTgColor}">
                {{ shenHourTg }}
              </div>            
            </v-chip>
            
            <v-chip outlined label style="width: 60px;" class="ml-1 pa-0 d-flex justify-center" >
              <div :style="{color: bigyunTgColor}">
                {{ bigyunTg }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: bigyunTgColor}">
                {{ shenBigyunTg }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center" >
              <div :style="{color: liunianTgColor}">
                {{ liunianTg }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: liunianTgColor}">
                {{ shenLiunianTg }}
              </div>
            </v-chip>
          </div>
          <div class="d-flex d-flex justify-center mt-1 ">
            <v-chip outlined label style="width: 60px;" class="pa-0 d-flex justify-center" >
              <div :style="{color: yearDzColor}">
                {{ yearDz }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: yearDzColor}">
                {{ shenYearDz }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center" >
              <div :style="{color: monthDzColor}">
                {{ monthDz }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: monthDzColor}">
                {{ shenMonthDz }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center" >
              <div :style="{color: dayDzColor}">
                {{ dayDz }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: dayDzColor}">
                {{ shenDayDz }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center" >
              <div :style="{color: hourDzColor}">
                {{ hourDz }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: hourDzColor}">
                {{ shenHourDz }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px;" class="ml-1 pa-0 d-flex justify-center" >
              <div :style="{color: bigyunDzColor}">
                {{ bigyunDz }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: bigyunDzColor}">
                {{ shenBigyunDz }}
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; margin-left: 3px;" class="pa-0 d-flex justify-center" >
              <div :style="{color: liunianDzColor}">
                {{ liunianDz }}
              </div>
              <div class="ml-1 mt-n3" :style="{'font-size': 11+'px', color: liunianDzColor}">
                {{ shenLiunianDz }}
              </div>
            </v-chip>
          </div>
          <div class="d-flex d-flex justify-center mt-1 " >
            <v-chip outlined label style="width: 60px; height: 40px;" class="pa-0 d-flex justify-center">
              <div v-for="(item, index) in dzcgYearList" :key="index" style="margin-left: 2px;" >
                <div class="d-flex justify-center" :style="{ 'font-size': 11 + 'px', color : item.color }" >
                  {{ item.ss }}
                </div>
                <div :style="{ color : item.color }">
                  {{ item.tg }}
                </div>
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; height: 40px; margin-left: 3px;" class="pa-0 d-flex justify-center">
              <div v-for="(item, index) in dzcgMonthList" :key="index" style="margin-left: 2px;" >
                <div class="d-flex justify-center" :style="{ 'font-size': 11 + 'px', color : item.color }" >
                  {{ item.ss }}
                </div>
                <div :style="{ color : item.color }">
                  {{ item.tg }}
                </div>
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; height: 40px; margin-left: 3px;" class="pa-0 d-flex justify-center">
              <div v-for="(item, index) in dzcgDayList" :key="index" style="margin-left: 2px;" >
                <div class="d-flex justify-center" :style="{ 'font-size': 11 + 'px', color : item.color }" >
                  {{ item.ss }}
                </div>
                <div :style="{ color : item.color }">
                  {{ item.tg }}
                </div>
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; height: 40px; margin-left: 3px;" class="pa-0 d-flex justify-center" >
              <div v-for="(item, index) in dzcgHourList" :key="index" style="margin-left: 2px;" >
                <div class="d-flex justify-center" :style="{ 'font-size': 11 + 'px', color : item.color }" >
                  {{ item.ss }}
                </div>
                <div :style="{ color : item.color }">
                  {{ item.tg }}
                </div>
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; height: 40px;" class="ml-1 pa-0 d-flex justify-center">
              <div v-for="(item, index) in dzcgBigyunList" :key="index" style="margin-left: 2px;" >
                <div class="d-flex justify-center" :style="{ 'font-size': 11 + 'px', color : item.color }" >
                  {{ item.ss }}
                </div>
                <div :style="{ color : item.color }">
                  {{ item.tg }}
                </div>
              </div>
            </v-chip>
            <v-chip outlined label style="width: 60px; height: 40px; margin-left: 3px;" class="mb-2 pa-0 d-flex justify-center">
              <div v-for="(item, index) in dzcgLiunianList" :key="index" style="margin-left: 2px;" >
                <div class="d-flex justify-center" :style="{ 'font-size': 11 + 'px', color : item.color }" >
                  {{ item.ss }}
                </div>
                <div :style="{ color : item.color }">
                  {{ item.tg }}
                </div>
              </div>
            </v-chip>
          </div>
          <div class="ma-2">
            <v-row  v-for="(item, index) in textHeChong" :key="index" class="pa-0 ma-0">
                <v-col cols="12" class="pa-0 ma-0">
                  {{ item }}
                </v-col>
              </v-row>            
          </div>

        </v-card>
      </v-col>
      <v-col cols="12" class="pa-0 ma-0">
        <v-card class="mt-2" style="border: 1px solid #f1f4f6; ">
          <div class="d-flex justify-center">
            <v-chip label  class="ml-2 mt-2">
              大运 ( {{ bzQiyun }} 起运 )
            </v-chip>
          </div>

          <div class="d-flex justify-center mt-2 mb-2">
            <div  v-for="(item, index) in bigyunList" :key="index"  >

              <div v-if="bigyunIndex == index" >
                <v-chip outlined label style="width: 40px; font-size: 12px; cursor: pointer; background: green;" class="pa-0 d-flex justify-center" @click="fnDayunClick(index, true)">
                  {{item.year}}
                </v-chip>
              </div>
              <div v-else>
                <v-chip outlined label style="width: 40px; font-size: 12px; cursor: pointer;" class="pa-0 d-flex justify-center" @click="fnDayunClick(index, true)">
                  {{item.year}}
                </v-chip>
              </div>
              <div v-if="bigyunIndex == index">
                <v-chip outlined label style="width: 40px; cursor: pointer; background: green;" class="mt-1 pa-0 d-flex justify-center" @click="fnDayunClick(index, true)">
                  {{item.age}}
                </v-chip>
              </div>
              <div v-else>
                <v-chip outlined label style="width: 40px; cursor: pointer;" class="mt-1 pa-0 d-flex justify-center" @click="fnDayunClick(index, true)">
                  {{item.age}}
                </v-chip>
              </div>
              <div v-if="bigyunIndex == index">
                <v-chip outlined label style="width: 40px; cursor: pointer; background: green;" class="mt-1 pa-0 d-flex justify-center" @click="fnDayunClick(index, true)">
                  {{item.tg}}{{item.dz}}
                </v-chip>
              </div>
              <div v-else>
                <v-chip outlined label style="width: 40px; cursor: pointer;" class="mt-1 pa-0 d-flex justify-center" @click="fnDayunClick(index, true)">
                  {{item.tg}}{{item.dz}}
                </v-chip>
              </div>

              <div class="mt-4">
                <div v-if="index == 0" >
                  <div v-if="liunianIndex == 0 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList10.year}}
                      </div>
                      <div> 
                        {{liunianList10.tg}}{{liunianList10.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList10.year}}
                      </div>
                      <div>
                        {{liunianList10.tg}}{{liunianList10.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 1 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList11.year}}
                      </div>
                      <div>
                        {{liunianList11.tg}}{{liunianList11.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList11.year}}
                      </div>
                      <div>
                        {{liunianList11.tg}}{{liunianList11.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 2 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList12.year}}
                      </div>
                      <div>
                        {{liunianList12.tg}}{{liunianList12.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList12.year}}
                      </div>
                      <div>
                        {{liunianList12.tg}}{{liunianList12.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 3 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList13.year}}
                      </div>
                      <div>
                        {{liunianList13.tg}}{{liunianList13.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList13.year}}
                      </div>
                      <div>
                        {{liunianList13.tg}}{{liunianList13.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 4 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList14.year}}
                      </div>
                      <div>
                        {{liunianList14.tg}}{{liunianList14.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList14.year}}
                      </div>
                      <div>
                        {{liunianList14.tg}}{{liunianList14.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 5 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList15.year}}
                      </div>
                      <div>
                        {{liunianList15.tg}}{{liunianList15.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList15.year}}
                      </div>
                      <div>
                        {{liunianList15.tg}}{{liunianList15.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 6 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList16.year}}
                      </div>
                      <div>
                        {{liunianList16.tg}}{{liunianList16.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList16.year}}
                      </div>
                      <div>
                        {{liunianList16.tg}}{{liunianList16.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 7 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList17.year}}
                      </div>
                      <div>
                        {{liunianList17.tg}}{{liunianList17.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList17.year}}
                      </div>
                      <div>
                        {{liunianList17.tg}}{{liunianList17.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 8 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList18.year}}
                      </div>
                      <div>
                        {{liunianList18.tg}}{{liunianList18.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList18.year}}
                      </div>
                      <div>
                        {{liunianList18.tg}}{{liunianList18.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 9 && bigyunIndex == 0" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList19.year}}
                      </div>
                      <div>
                        {{liunianList19.tg}}{{liunianList19.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 0)">
                      <div style="font-size: 12px; ">
                        {{liunianList19.year}}
                      </div>
                      <div>
                        {{liunianList19.tg}}{{liunianList19.dz}}
                      </div>
                  </div>

                </div>
                <div v-if="index == 1" >
                  <div v-if="liunianIndex == 0 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList20.year}}
                      </div>
                      <div>
                        {{liunianList20.tg}}{{liunianList20.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList20.year}}
                      </div>
                      <div>
                        {{liunianList20.tg}}{{liunianList20.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 1 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList21.year}}
                      </div>
                      <div>
                        {{liunianList21.tg}}{{liunianList21.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList21.year}}
                      </div>
                      <div>
                        {{liunianList21.tg}}{{liunianList21.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 2 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList22.year}}
                      </div>
                      <div>
                        {{liunianList22.tg}}{{liunianList22.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList22.year}}
                      </div>
                      <div>
                        {{liunianList22.tg}}{{liunianList22.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 3 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList23.year}}
                      </div>
                      <div>
                        {{liunianList23.tg}}{{liunianList23.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList23.year}}
                      </div>
                      <div>
                        {{liunianList23.tg}}{{liunianList23.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 4 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList24.year}}
                      </div>
                      <div>
                        {{liunianList24.tg}}{{liunianList24.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList24.year}}
                      </div>
                      <div>
                        {{liunianList24.tg}}{{liunianList24.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 5 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList25.year}}
                      </div>
                      <div>
                        {{liunianList25.tg}}{{liunianList25.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList25.year}}
                      </div>
                      <div>
                        {{liunianList25.tg}}{{liunianList25.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 6 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList26.year}}
                      </div>
                      <div>
                        {{liunianList26.tg}}{{liunianList26.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList26.year}}
                      </div>
                      <div>
                        {{liunianList26.tg}}{{liunianList26.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 7 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList27.year}}
                      </div>
                      <div>
                        {{liunianList27.tg}}{{liunianList27.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList27.year}}
                      </div>
                      <div>
                        {{liunianList27.tg}}{{liunianList27.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 8 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList28.year}}
                      </div>
                      <div>
                        {{liunianList28.tg}}{{liunianList28.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList28.year}}
                      </div>
                      <div>
                        {{liunianList28.tg}}{{liunianList28.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 9 && bigyunIndex == 1" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList29.year}}
                      </div>
                      <div>
                        {{liunianList29.tg}}{{liunianList29.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 1)">
                      <div style="font-size: 12px; ">
                        {{liunianList29.year}}
                      </div>
                      <div>
                        {{liunianList29.tg}}{{liunianList29.dz}}
                      </div>
                  </div>

                </div>
                <div v-if="index == 2" >
                  <div v-if="liunianIndex == 0 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList30.year}}
                      </div>
                      <div>
                        {{liunianList30.tg}}{{liunianList30.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList30.year}}
                      </div>
                      <div>
                        {{liunianList30.tg}}{{liunianList30.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 1 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList31.year}}
                      </div>
                      <div>
                        {{liunianList31.tg}}{{liunianList31.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList31.year}}
                      </div>
                      <div>
                        {{liunianList31.tg}}{{liunianList31.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 2 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList32.year}}
                      </div>
                      <div>
                        {{liunianList32.tg}}{{liunianList32.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList32.year}}
                      </div>
                      <div>
                        {{liunianList32.tg}}{{liunianList32.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 3 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList33.year}}
                      </div>
                      <div>
                        {{liunianList33.tg}}{{liunianList33.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList33.year}}
                      </div>
                      <div>
                        {{liunianList33.tg}}{{liunianList33.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 4 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList34.year}}
                      </div>
                      <div>
                        {{liunianList34.tg}}{{liunianList34.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList34.year}}
                      </div>
                      <div>
                        {{liunianList34.tg}}{{liunianList34.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 5 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList35.year}}
                      </div>
                      <div>
                        {{liunianList35.tg}}{{liunianList35.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList35.year}}
                      </div>
                      <div>
                        {{liunianList35.tg}}{{liunianList35.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 6 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList36.year}}
                      </div>
                      <div>
                        {{liunianList36.tg}}{{liunianList36.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList36.year}}
                      </div>
                      <div>
                        {{liunianList36.tg}}{{liunianList36.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 7 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList37.year}}
                      </div>
                      <div>
                        {{liunianList37.tg}}{{liunianList37.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList37.year}}
                      </div>
                      <div>
                        {{liunianList37.tg}}{{liunianList37.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 8 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList38.year}}
                      </div>
                      <div>
                        {{liunianList38.tg}}{{liunianList38.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList38.year}}
                      </div>
                      <div>
                        {{liunianList38.tg}}{{liunianList38.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 9 && bigyunIndex == 2" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList39.year}}
                      </div>
                      <div>
                        {{liunianList39.tg}}{{liunianList39.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 2)">
                      <div style="font-size: 12px; ">
                        {{liunianList39.year}}
                      </div>
                      <div>
                        {{liunianList39.tg}}{{liunianList39.dz}}
                      </div>
                  </div>

                </div>
                <div v-if="index == 3" >
                  <div v-if="liunianIndex == 0 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList40.year}}
                      </div>
                      <div>
                        {{liunianList40.tg}}{{liunianList40.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList40.year}}
                      </div>
                      <div>
                        {{liunianList40.tg}}{{liunianList40.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 1 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList41.year}}
                      </div>
                      <div>
                        {{liunianList41.tg}}{{liunianList41.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList41.year}}
                      </div>
                      <div>
                        {{liunianList41.tg}}{{liunianList41.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 2 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList42.year}}
                      </div>
                      <div>
                        {{liunianList42.tg}}{{liunianList42.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList42.year}}
                      </div>
                      <div>
                        {{liunianList42.tg}}{{liunianList42.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 3 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList43.year}}
                      </div>
                      <div>
                        {{liunianList43.tg}}{{liunianList43.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList43.year}}
                      </div>
                      <div>
                        {{liunianList43.tg}}{{liunianList43.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 4 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList44.year}}
                      </div>
                      <div>
                        {{liunianList44.tg}}{{liunianList44.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList44.year}}
                      </div>
                      <div>
                        {{liunianList44.tg}}{{liunianList44.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 5 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList45.year}}
                      </div>
                      <div>
                        {{liunianList45.tg}}{{liunianList45.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList45.year}}
                      </div>
                      <div>
                        {{liunianList45.tg}}{{liunianList45.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 6 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList46.year}}
                      </div>
                      <div>
                        {{liunianList46.tg}}{{liunianList46.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList46.year}}
                      </div>
                      <div>
                        {{liunianList46.tg}}{{liunianList46.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 7 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList47.year}}
                      </div>
                      <div>
                        {{liunianList47.tg}}{{liunianList47.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList47.year}}
                      </div>
                      <div>
                        {{liunianList47.tg}}{{liunianList47.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 8 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList48.year}}
                      </div>
                      <div>
                        {{liunianList48.tg}}{{liunianList48.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList48.year}}
                      </div>
                      <div>
                        {{liunianList48.tg}}{{liunianList48.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 9 && bigyunIndex == 3" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList49.year}}
                      </div>
                      <div>
                        {{liunianList49.tg}}{{liunianList49.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 3)">
                      <div style="font-size: 12px; ">
                        {{liunianList49.year}}
                      </div>
                      <div>
                        {{liunianList49.tg}}{{liunianList49.dz}}
                      </div>
                  </div>

                </div>
                <div v-if="index == 4" >
                  <div v-if="liunianIndex == 0 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList50.year}}
                      </div>
                      <div>
                        {{liunianList50.tg}}{{liunianList50.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList50.year}}
                      </div>
                      <div>
                        {{liunianList50.tg}}{{liunianList50.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 1 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList51.year}}
                      </div>
                      <div>
                        {{liunianList51.tg}}{{liunianList51.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList51.year}}
                      </div>
                      <div>
                        {{liunianList51.tg}}{{liunianList51.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 2 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList52.year}}
                      </div>
                      <div>
                        {{liunianList52.tg}}{{liunianList52.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList52.year}}
                      </div>
                      <div>
                        {{liunianList52.tg}}{{liunianList52.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 3 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList53.year}}
                      </div>
                      <div>
                        {{liunianList53.tg}}{{liunianList53.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList53.year}}
                      </div>
                      <div>
                        {{liunianList53.tg}}{{liunianList53.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 4 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList54.year}}
                      </div>
                      <div>
                        {{liunianList54.tg}}{{liunianList54.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList54.year}}
                      </div>
                      <div>
                        {{liunianList54.tg}}{{liunianList54.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 5 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList55.year}}
                      </div>
                      <div>
                        {{liunianList55.tg}}{{liunianList55.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList55.year}}
                      </div>
                      <div>
                        {{liunianList55.tg}}{{liunianList55.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 6 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList56.year}}
                      </div>
                      <div>
                        {{liunianList56.tg}}{{liunianList56.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList56.year}}
                      </div>
                      <div>
                        {{liunianList56.tg}}{{liunianList56.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 7 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList57.year}}
                      </div>
                      <div>
                        {{liunianList57.tg}}{{liunianList57.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList57.year}}
                      </div>
                      <div>
                        {{liunianList57.tg}}{{liunianList57.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 8 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList58.year}}
                      </div>
                      <div>
                        {{liunianList58.tg}}{{liunianList58.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList58.year}}
                      </div>
                      <div>
                        {{liunianList58.tg}}{{liunianList58.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 9 && bigyunIndex == 4" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList59.year}}
                      </div>
                      <div>
                        {{liunianList59.tg}}{{liunianList59.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 4)">
                      <div style="font-size: 12px; ">
                        {{liunianList59.year}}
                      </div>
                      <div>
                        {{liunianList59.tg}}{{liunianList59.dz}}
                      </div>
                  </div>

                </div>
                <div v-if="index == 5" >
                  <div v-if="liunianIndex == 0 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList60.year}}
                      </div>
                      <div>
                        {{liunianList60.tg}}{{liunianList60.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList60.year}}
                      </div>
                      <div>
                        {{liunianList60.tg}}{{liunianList60.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 1 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList61.year}}
                      </div>
                      <div>
                        {{liunianList61.tg}}{{liunianList61.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList61.year}}
                      </div>
                      <div>
                        {{liunianList61.tg}}{{liunianList61.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 2 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList62.year}}
                      </div>
                      <div>
                        {{liunianList62.tg}}{{liunianList62.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList62.year}}
                      </div>
                      <div>
                        {{liunianList62.tg}}{{liunianList62.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 3 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList63.year}}
                      </div>
                      <div>
                        {{liunianList63.tg}}{{liunianList63.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList63.year}}
                      </div>
                      <div>
                        {{liunianList63.tg}}{{liunianList63.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 4 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList64.year}}
                      </div>
                      <div>
                        {{liunianList64.tg}}{{liunianList64.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList64.year}}
                      </div>
                      <div>
                        {{liunianList64.tg}}{{liunianList64.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 5 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList65.year}}
                      </div>
                      <div>
                        {{liunianList65.tg}}{{liunianList65.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList65.year}}
                      </div>
                      <div>
                        {{liunianList65.tg}}{{liunianList65.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 6 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList66.year}}
                      </div>
                      <div>
                        {{liunianList66.tg}}{{liunianList66.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList66.year}}
                      </div>
                      <div>
                        {{liunianList66.tg}}{{liunianList66.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 7 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList67.year}}
                      </div>
                      <div>
                        {{liunianList67.tg}}{{liunianList67.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList67.year}}
                      </div>
                      <div>
                        {{liunianList67.tg}}{{liunianList67.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 8 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList68.year}}
                      </div>
                      <div>
                        {{liunianList68.tg}}{{liunianList68.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList68.year}}
                      </div>
                      <div>
                        {{liunianList68.tg}}{{liunianList68.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 9 && bigyunIndex == 5" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList69.year}}
                      </div>
                      <div>
                        {{liunianList69.tg}}{{liunianList69.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 5)">
                      <div style="font-size: 12px; ">
                        {{liunianList69.year}}
                      </div>
                      <div>
                        {{liunianList69.tg}}{{liunianList69.dz}}
                      </div>
                  </div>

                </div>
                <div v-if="index == 6" >
                  <div v-if="liunianIndex == 0 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList70.year}}
                      </div>
                      <div>
                        {{liunianList70.tg}}{{liunianList70.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList70.year}}
                      </div>
                      <div>
                        {{liunianList70.tg}}{{liunianList70.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 1 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList71.year}}
                      </div>
                      <div>
                        {{liunianList71.tg}}{{liunianList71.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList71.year}}
                      </div>
                      <div>
                        {{liunianList71.tg}}{{liunianList71.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 2 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList72.year}}
                      </div>
                      <div>
                        {{liunianList72.tg}}{{liunianList72.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList72.year}}
                      </div>
                      <div>
                        {{liunianList72.tg}}{{liunianList72.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 3 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList73.year}}
                      </div>
                      <div>
                        {{liunianList73.tg}}{{liunianList73.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList73.year}}
                      </div>
                      <div>
                        {{liunianList73.tg}}{{liunianList73.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 4 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList74.year}}
                      </div>
                      <div>
                        {{liunianList74.tg}}{{liunianList74.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList74.year}}
                      </div>
                      <div>
                        {{liunianList74.tg}}{{liunianList74.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 5 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList75.year}}
                      </div>
                      <div>
                        {{liunianList75.tg}}{{liunianList75.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList75.year}}
                      </div>
                      <div>
                        {{liunianList75.tg}}{{liunianList75.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 6 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList76.year}}
                      </div>
                      <div>
                        {{liunianList76.tg}}{{liunianList76.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList76.year}}
                      </div>
                      <div>
                        {{liunianList76.tg}}{{liunianList76.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 7 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList77.year}}
                      </div>
                      <div>
                        {{liunianList77.tg}}{{liunianList77.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList77.year}}
                      </div>
                      <div>
                        {{liunianList77.tg}}{{liunianList77.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 8 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList78.year}}
                      </div>
                      <div>
                        {{liunianList78.tg}}{{liunianList78.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList78.year}}
                      </div>
                      <div>
                        {{liunianList78.tg}}{{liunianList78.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 9 && bigyunIndex == 6" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList79.year}}
                      </div>
                      <div>
                        {{liunianList79.tg}}{{liunianList79.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 6)">
                      <div style="font-size: 12px; ">
                        {{liunianList79.year}}
                      </div>
                      <div>
                        {{liunianList79.tg}}{{liunianList79.dz}}
                      </div>
                  </div>

                </div>
                <div v-if="index == 7" >
                  <div v-if="liunianIndex == 0 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList80.year}}
                      </div>
                      <div>
                        {{liunianList80.tg}}{{liunianList80.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 " @click="fnLiunianClick2(0, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList80.year}}
                      </div>
                      <div>
                        {{liunianList80.tg}}{{liunianList80.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 1 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList81.year}}
                      </div>
                      <div>
                        {{liunianList81.tg}}{{liunianList81.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(1, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList81.year}}
                      </div>
                      <div>
                        {{liunianList81.tg}}{{liunianList81.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 2 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList82.year}}
                      </div>
                      <div>
                        {{liunianList82.tg}}{{liunianList82.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(2, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList82.year}}
                      </div>
                      <div>
                        {{liunianList82.tg}}{{liunianList82.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 3 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList83.year}}
                      </div>
                      <div>
                        {{liunianList83.tg}}{{liunianList83.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(3, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList83.year}}
                      </div>
                      <div>
                        {{liunianList83.tg}}{{liunianList83.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 4 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList84.year}}
                      </div>
                      <div>
                        {{liunianList84.tg}}{{liunianList84.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(4, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList84.year}}
                      </div>
                      <div>
                        {{liunianList84.tg}}{{liunianList84.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 5 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList85.year}}
                      </div>
                      <div>
                        {{liunianList85.tg}}{{liunianList85.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(5, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList85.year}}
                      </div>
                      <div>
                        {{liunianList85.tg}}{{liunianList85.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 6 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList86.year}}
                      </div>
                      <div>
                        {{liunianList86.tg}}{{liunianList86.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(6, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList86.year}}
                      </div>
                      <div>
                        {{liunianList86.tg}}{{liunianList86.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 7 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList87.year}}
                      </div>
                      <div>
                        {{liunianList87.tg}}{{liunianList87.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(7, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList87.year}}
                      </div>
                      <div>
                        {{liunianList87.tg}}{{liunianList87.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 8 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList88.year}}
                      </div>
                      <div>
                        {{liunianList88.tg}}{{liunianList88.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(8, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList88.year}}
                      </div>
                      <div>
                        {{liunianList88.tg}}{{liunianList88.dz}}
                      </div>
                  </div>

                  <div v-if="liunianIndex == 9 && bigyunIndex == 7" style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background: green; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList89.year}}
                      </div>
                      <div>
                        {{liunianList89.tg}}{{liunianList89.dz}}
                      </div>
                  </div>
                  <div v-else style="border-radius: 4px; width: 38px; font-size: 14px; cursor: pointer; background:grey; text-align: center;" class="pa-0 mt-1" @click="fnLiunianClick2(9, 7)">
                      <div style="font-size: 12px; ">
                        {{liunianList89.year}}
                      </div>
                      <div>
                        {{liunianList89.tg}}{{liunianList89.dz}}
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </v-card>
      </v-col>

    </v-row>

    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="pa-0 ma-0">

        <v-card class="mt-2"  style="border: 1px solid #f1f4f6">
          <div class="d-flex justify-center mt-4" style="width: 330px;">穷通宝鉴</div>
          <div class="d-flex justify-center ma-2" >
            {{ textQiongtu }}
          </div>

          <div class="d-flex justify-center mt-4" style="width:  330px;">韦千里 - 八字提要</div>
          <div class="d-flex justify-center ma-2" >
              {{ textWei }}
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" class="pa-0 ma-0">
        <v-card class="mt-2 borderd"  >
          <div class="d-flex justify-center mt-2" style="width:  330px;">八字分析
            <v-icon class="ml-4" @click="fnPayListCopy();">mdi-content-copy</v-icon>
          </div>
          <div class="d-flex justify-center ma-2" >
            <div>
              <v-row  v-for="(item, index) in textZiPing" :key="index" class="pa-0 ma-0">
                <v-col cols="12" class="pa-0 ma-0">
                  {{ item }}
                </v-col>
              </v-row>

              <div v-if="bShowDonate" class="mt-2 d-flex justify-center" style="color: yellow;">

                <v-text-field
                    style="width: 140px;"
                    v-model="nickName"
                    variant="outlined"
                    density="compact"
                    clearable
                    hide-details
                    label="金额(元)"
                ></v-text-field>

                <v-btn class="ml-4 mt-1" variant="outlined" @click="fnPay();" >
                  捐赠
                </v-btn>
              </div>

              <!-- div v-if="bShowMp">
                <v-row class="pa-0 ma-0">
                    <v-col cols="12" class="pa-0 ma-0">
                            <div class="mt-2 mx-2">
                              <div class="d-flex justify-center">公众号</div>
                              <div class="d-flex justify-center">
                                <img src="@/assets/img/hongying.jpg"  height=200 />
                              </div>
                            </div>
                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0">
                            <div class="mt-2 mx-2">
                              <div class="d-flex justify-center">微信群</div>
                              <div class="d-flex justify-center">
                                <img :src="curUrl + '/qun.png?' + Math.floor(Math.random() * 100 + 1)" height=200 />
                              </div>
                            </div>
                    </v-col>
                </v-row>
              </div -->

              <div style="height: 20px;"></div>

            </div>
          </div>
        </v-card>

      </v-col>

    </v-row>

    <div v-if="bShowSelectDate" style="position: absolute; width: 360px; top: 0px; left: 3px; border: 1px solid #f1f4f6; z-index: 300;">
      <v-card >
        <v-card-title class="d-flex justify-center mt-2">选择排盘日期和性别 </v-card-title>
        <div class="d-flex justify-center mb-2">
          <v-chip label class="mt-1">
            {{selYear}}-{{selMonth}}-{{selDay}} {{selHour}}
          </v-chip>
          <div class="ml-4">
            <v-switch
                v-model="selBoolSex"
                density="compact"
                hide-details
                :label="selBoolSex?'女':'男'"
              ></v-switch> 
          </div>
        </div >
        <div class="d-flex mx-2" style="background-color: white;">
            <div style="width: 25%;">
              <VueScrollPicker :options="spYearOption" v-model="selYear" />
            </div>
            <div style="width: 25%;">
              <VueScrollPicker :options="spMonthOption" v-model="selMonth" />
            </div>
            <div style="width: 25%;">
              <VueScrollPicker :options="spDayOption" v-model="selDay" />
            </div>
            <div style="width: 25%;">
              <VueScrollPicker :options="spHourOption" v-model="selHour" />
            </div>
        </div>
        <div class="d-flex justify-center ma-4">
          <div>
            <v-btn class="ml-4 mt-2" variant="outlined" style="font-size: 12px;height: 28px;"  @click="bShowSelectDate=false;" >
                取消 
              </v-btn>
          </div>
          <div style="width: 80px;"></div>
          <div>
            <v-btn class="ml-4 mt-2" variant="outlined" style="font-size: 12px;height: 28px;"  @click="fnSelDateTime()" >
                排盘 
              </v-btn>
          </div>
        </div>
        <div style="height: 20px;"></div>
      </v-card>            
    </div>

    <div style="height: 80px;"></div>
  </div>
</template>

<script setup >
import {ref, nextTick} from "vue";
import { menuAndBar } from '@/assets/js/utils';
import { shallowRef, onMounted, onBeforeUnmount } from 'vue';
import emitter from '@/assets/js/bus.js';
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useRouter } from "vue-router";
import {Base64} from 'js-base64';
import wx from 'weixin-jsapi';
import {paipan, fnComputeShishen, fnComputeDzcg, fnConvertLunarMonth, fnConvertLunarDay, fnMakeBazi} from "@/assets/js/paipan";
import useClipboard from "vue-clipboard3";

onMounted(() => {

  //if( fnIsWeChat() == false ) {
  //  ElMessage('请在微信中浏览本网页！');
  //}

  if( curUrl.value.indexOf('www.ddfj0.cn') > 0 ) {
    bShowDonate.value = true;
  }  

  fullurl.value = window.location.href;

  //// 获取当前的日期和时间
  var date = new Date();
  bzYear.value = menuBar.bzYear;
  bzMonth.value = menuBar.bzMonth;
  bzDay.value = menuBar.bzDay;
  bzHour.value = menuBar.bzHour;
  bzMinute.value = date.getMinutes();
  bzSecond.value = date.getSeconds();
  boolSex.value = menuBar.boolSex;

  var bazi = paipan(boolSex.value, bzYear.value, bzMonth.value, bzDay.value, bzHour.value, bzMinute.value, bzSecond.value);
  fnProcessPaipan(bazi);

  console.log(curUrl.value);

  fnBrowseFeworld();

  /// fnShowAbout();

});

onBeforeUnmount(() => {
});

const router = useRouter();
const menuBar = menuAndBar();
const curUrl = ref(window.curUrl);
const appid = ref(window.wxAppid);
const wxCode = ref('');
const openid = ref(window.wxOpenid);
const fullurl = ref('');

const bShowMp = ref(true);  /// 是否显示公众号
const bShowDonate = ref(false);  /// 是否显示捐赠 

const nickName = ref('1');
const boolSex = ref(true);
const selBoolSex = ref(true);

const bigyunIndex = ref(0);
const liunianIndex = ref(0);
const bShowSelectDate = ref(false);
var paipanKey = '';

const spYearOption = ref([
  { name: '1930 年', value: 1930},
  { name: '1931 年', value: 1931},
  { name: '1932 年', value: 1932},
  { name: '1933 年', value: 1933},
  { name: '1934 年', value: 1934},
  { name: '1935 年', value: 1935},
  { name: '1936 年', value: 1936},
  { name: '1937 年', value: 1937},
  { name: '1938 年', value: 1938},
  { name: '1939 年', value: 1939},
  { name: '1940 年', value: 1940},
  { name: '1941 年', value: 1941},
  { name: '1942 年', value: 1942},
  { name: '1943 年', value: 1943},
  { name: '1944 年', value: 1944},
  { name: '1945 年', value: 1945},
  { name: '1946 年', value: 1946},
  { name: '1947 年', value: 1947},
  { name: '1948 年', value: 1948},
  { name: '1949 年', value: 1949},
  { name: '1950 年', value: 1950},
  { name: '1951 年', value: 1951},
  { name: '1952 年', value: 1952},
  { name: '1953 年', value: 1953},
  { name: '1954 年', value: 1954},
  { name: '1955 年', value: 1955},
  { name: '1956 年', value: 1956},
  { name: '1957 年', value: 1957},
  { name: '1958 年', value: 1958},
  { name: '1959 年', value: 1959},
  { name: '1960 年', value: 1960},
  { name: '1961 年', value: 1961},
  { name: '1962 年', value: 1962},
  { name: '1963 年', value: 1963},
  { name: '1964 年', value: 1964},
  { name: '1965 年', value: 1965},
  { name: '1966 年', value: 1966},
  { name: '1967 年', value: 1967},
  { name: '1968 年', value: 1968},
  { name: '1969 年', value: 1969},
  { name: '1970 年', value: 1970},
  { name: '1971 年', value: 1971},
  { name: '1972 年', value: 1972},
  { name: '1973 年', value: 1973},
  { name: '1974 年', value: 1974},
  { name: '1975 年', value: 1975},
  { name: '1976 年', value: 1976},
  { name: '1977 年', value: 1977},
  { name: '1978 年', value: 1978},
  { name: '1979 年', value: 1979},
  { name: '1980 年', value: 1980},
  { name: '1981 年', value: 1981},
  { name: '1982 年', value: 1982},
  { name: '1983 年', value: 1983},
  { name: '1984 年', value: 1984},
  { name: '1985 年', value: 1985}, 
  { name: '1986 年', value: 1986}, 
  { name: '1987 年', value: 1987}, 
  { name: '1988 年', value: 1988}, 
  { name: '1989 年', value: 1989}, 
  { name: '1990 年', value: 1990}, 
  { name: '1991 年', value: 1991}, 
  { name: '1992 年', value: 1992}, 
  { name: '1993 年', value: 1993}, 
  { name: '1994 年', value: 1994}, 
  { name: '1995 年', value: 1995}, 
  { name: '1996 年', value: 1996}, 
  { name: '1997 年', value: 1997}, 
  { name: '1998 年', value: 1998}, 
  { name: '1999 年', value: 1999}, 
  { name: '2000 年', value: 2000}, 
  { name: '2001 年', value: 2001}, 
  { name: '2002 年', value: 2002}, 
  { name: '2003 年', value: 2003}, 
  { name: '2004 年', value: 2004}, 
  { name: '2005 年', value: 2005}, 
  { name: '2006 年', value: 2006}, 
  { name: '2007 年', value: 2007}, 
  { name: '2008 年', value: 2008}, 
  { name: '2009 年', value: 2009}, 
  { name: '2010 年', value: 2010}, 
  { name: '2011 年', value: 2011}, 
  { name: '2012 年', value: 2012}, 
  { name: '2013 年', value: 2013}, 
  { name: '2014 年', value: 2014}, 
  { name: '2015 年', value: 2015}, 
  { name: '2016 年', value: 2016}, 
  { name: '2017 年', value: 2017}, 
  { name: '2018 年', value: 2018}, 
  { name: '2019 年', value: 2019}, 
  { name: '2020 年', value: 2020}, 
  { name: '2021 年', value: 2021}, 
  { name: '2022 年', value: 2022}, 
  { name: '2023 年', value: 2023}, 
  { name: '2024 年', value: 2024}, 
  { name: '2025 年', value: 2025}, 
  { name: '2026 年', value: 2026}, 
  { name: '2027 年', value: 2027}, 
  { name: '2028 年', value: 2028}, 
  { name: '2029 年', value: 2029}, 
  { name: '2030 年', value: 2030}, 
  { name: '2031 年', value: 2031}, 
  { name: '2032 年', value: 2032}, 
  { name: '2033 年', value: 2033}, 
  { name: '2034 年', value: 2034}, 
  { name: '2035 年', value: 2035}, 
  { name: '2036 年', value: 2036}, 
  { name: '2037 年', value: 2037}, 
  { name: '2038 年', value: 2038}, 
  { name: '2039 年', value: 2039}, 
  { name: '2040 年', value: 2040}, 
  { name: '2041 年', value: 2041}, 
  { name: '2042 年', value: 2042}, 
  { name: '2043 年', value: 2043}, 
  { name: '2044 年', value: 2044}, 
  { name: '2045 年', value: 2045}, 
  { name: '2046 年', value: 2046}, 
  { name: '2047 年', value: 2047}, 
  { name: '2048 年', value: 2048}, 
  { name: '2049 年', value: 2049}, 
  { name: '2050 年', value: 2050}, 
  { name: '2051 年', value: 2051}, 
  { name: '2052 年', value: 2052}, 
  { name: '2053 年', value: 2053}, 
  { name: '2054 年', value: 2054}, 
  { name: '2055 年', value: 2055}, 
  { name: '2056 年', value: 2056}, 
  { name: '2057 年', value: 2057}, 
  { name: '2058 年', value: 2058}, 
  { name: '2059 年', value: 2059}, 
  { name: '2060 年', value: 2060}, 
  { name: '2061 年', value: 2061}, 
  { name: '2062 年', value: 2062}, 
  { name: '2063 年', value: 2063}, 
  { name: '2064 年', value: 2064}, 
  { name: '2065 年', value: 2065}, 
  { name: '2066 年', value: 2066}, 
  { name: '2067 年', value: 2067}, 
  { name: '2068 年', value: 2068}, 
  { name: '2069 年', value: 2069}, 
  { name: '2070 年', value: 2070}, 
]);
const spMonthOption = ref([
  { name: '1 月', value: 1}, 
  { name: '2 月', value: 2}, 
  { name: '3 月', value: 3}, 
  { name: '4 月', value: 4}, 
  { name: '5 月', value: 5}, 
  { name: '6 月', value: 6}, 
  { name: '7 月', value: 7}, 
  { name: '8 月', value: 8}, 
  { name: '9 月', value: 9}, 
  { name: '10月', value: 10}, 
  { name: '11月', value: 11}, 
  { name: '12月', value: 12}, 
]);
const spDayOption = ref([
  { name: '1 日', value: 1}, 
  { name: '2 日', value: 2}, 
  { name: '3 日', value: 3}, 
  { name: '4 日', value: 4}, 
  { name: '5 日', value: 5}, 
  { name: '6 日', value: 6}, 
  { name: '7 日', value: 7}, 
  { name: '8 日', value: 8}, 
  { name: '9 日', value: 9}, 
  { name: '10日', value: 10}, 
  { name: '11日', value: 11}, 
  { name: '12日', value: 12}, 
  { name: '13日', value: 13}, 
  { name: '14日', value: 14}, 
  { name: '15日', value: 15}, 
  { name: '16日', value: 16}, 
  { name: '17日', value: 17}, 
  { name: '18日', value: 18}, 
  { name: '19日', value: 19}, 
  { name: '20日', value: 20}, 
  { name: '21日', value: 21}, 
  { name: '22日', value: 22}, 
  { name: '23日', value: 23}, 
  { name: '24日', value: 24}, 
  { name: '25日', value: 25}, 
  { name: '26日', value: 26}, 
  { name: '27日', value: 27}, 
  { name: '28日', value: 28}, 
  { name: '29日', value: 29}, 
  { name: '30日', value: 30}, 
  { name: '31日', value: 31}, 
]);
const spHourOption = ref([
  { name: '0 时', value: 0}, 
  { name: '1 时', value: 1}, 
  { name: '2 时', value: 2}, 
  { name: '3 时', value: 3}, 
  { name: '4 时', value: 4}, 
  { name: '5 时', value: 5}, 
  { name: '6 时', value: 6}, 
  { name: '7 时', value: 7}, 
  { name: '8 时', value: 8}, 
  { name: '9 时', value: 9}, 
  { name: '10时', value: 10}, 
  { name: '11时', value: 11}, 
  { name: '12时', value: 12},
  { name: '13时', value: 13}, 
  { name: '14时', value: 14}, 
  { name: '15时', value: 15}, 
  { name: '16时', value: 16}, 
  { name: '17时', value: 17}, 
  { name: '18时', value: 18}, 
  { name: '19时', value: 19}, 
  { name: '20时', value: 20}, 
  { name: '21时', value: 21}, 
  { name: '22时', value: 22},
  { name: '23时', value: 23}, 
]);

//#region 八字排盘 
const lunarDate = ref("甲寅 虎年 正月 初一");

const selYear = ref(1980);
const selMonth = ref(6);
const selDay = ref(15);
const selHour = ref(12);

const bzYear = ref(1980);
const bzMonth = ref(1);
const bzDay = ref(1);
const bzHour = ref(0);
const bzMinute = ref(0);
const bzSecond = ref(0);
const bzXz = ref("白羊座");

const bzQiyun = ref("2010");

const hourTg = ref("庚");
const hourDz = ref("辰");
const dayTg = ref("辛");
const dayDz = ref("巳");
const monthTg = ref("丁");
const monthDz = ref("丑");
const yearTg = ref("甲");
const yearDz = ref("戌");
const bigyunTg = ref("壬");
const bigyunDz = ref("戌");
const liunianTg = ref("甲");
const liunianDz = ref("辰");

const hourTgColor = ref("");
const hourDzColor = ref("");
const dayTgColor = ref("");
const dayDzColor = ref("");
const monthTgColor = ref("");
const monthDzColor = ref("");
const yearTgColor = ref("");
const yearDzColor = ref("");
const bigyunTgColor = ref("");
const bigyunDzColor = ref("");
const liunianTgColor = ref("");
const liunianDzColor = ref("");

//// 定义是神变量
const shenHourTg = ref("官");
const shenHourDz = ref("煞");
const shenDayTg = ref("日");
const shenDayDz = ref("神");
const shenMonthTg = ref("印");
const shenMonthDz = ref("枭");
const shenYearTg = ref("比");
const shenYearDz = ref("劫");
const shenBigyunTg = ref("财");
const shenBigyunDz = ref("才");
const shenLiunianTg = ref("食");
const shenLiunianDz = ref("伤");

//// 地支藏干
const dzcgHourList = ref([]);
const dzcgDayList = ref([]);
const dzcgMonthList = ref([]);
const dzcgYearList = ref([]);
const dzcgBigyunList = ref([]);
const dzcgLiunianList = ref([]);

const bigyunList = ref([{year: 2015, age: 20, tg: '甲', dz: '子'},
                        {year: 2025, age: 20, tg: '甲', dz: '子'},
                        {year: 2035, age: 20, tg: '甲', dz: '子'},
                        {year: 2045, age: 20, tg: '甲', dz: '子'},
                        {year: 2055, age: 20, tg: '甲', dz: '子'},
                        {year: 2065, age: 20, tg: '甲', dz: '子'},
                        {year: 2075, age: 20, tg: '甲', dz: '子'},
                        {year: 2085, age: 20, tg: '甲', dz: '子'} ]);
const liunianList = ref([{year: 2015, tg: '甲', dz: '子'},
                        {year: 2016, tg: '甲', dz: '子'},
                        {year: 2017, tg: '甲', dz: '子'},
                        {year: 2018, tg: '甲', dz: '子'},
                        {year: 2019, tg: '甲', dz: '子'},
                        {year: 2020, tg: '甲', dz: '子'},
                        {year: 2021, tg: '甲', dz: '子'},
                        {year: 2022, tg: '甲', dz: '子'},
                        {year: 2023, tg: '甲', dz: '子'},
                        {year: 2024, tg: '甲', dz: '子'}
                        ]);

//#region 80年流年
const liunianList10 = ref([]);
const liunianList11 = ref([]);
const liunianList12 = ref([]);
const liunianList13 = ref([]);
const liunianList14 = ref([]);
const liunianList15 = ref([]);
const liunianList16 = ref([]);
const liunianList17 = ref([]);
const liunianList18 = ref([]);
const liunianList19 = ref([]);

const liunianList20 = ref([]);
const liunianList21 = ref([]);
const liunianList22 = ref([]);
const liunianList23 = ref([]);
const liunianList24 = ref([]);
const liunianList25 = ref([]);
const liunianList26 = ref([]);
const liunianList27 = ref([]);
const liunianList28 = ref([]);
const liunianList29 = ref([]);

const liunianList30 = ref([]);
const liunianList31 = ref([]);
const liunianList32 = ref([]);
const liunianList33 = ref([]);
const liunianList34 = ref([]);
const liunianList35 = ref([]);
const liunianList36 = ref([]);
const liunianList37 = ref([]);
const liunianList38 = ref([]);
const liunianList39 = ref([]);

const liunianList40 = ref([]);
const liunianList41 = ref([]);
const liunianList42 = ref([]);
const liunianList43 = ref([]);
const liunianList44 = ref([]);
const liunianList45 = ref([]);
const liunianList46 = ref([]);
const liunianList47 = ref([]);
const liunianList48 = ref([]);
const liunianList49 = ref([]);

const liunianList50 = ref([]);
const liunianList51 = ref([]);
const liunianList52 = ref([]);
const liunianList53 = ref([]);
const liunianList54 = ref([]);
const liunianList55 = ref([]);
const liunianList56 = ref([]);
const liunianList57 = ref([]);
const liunianList58 = ref([]);
const liunianList59 = ref([]);

const liunianList60 = ref([]);
const liunianList61 = ref([]);
const liunianList62 = ref([]);
const liunianList63 = ref([]);
const liunianList64 = ref([]);
const liunianList65 = ref([]);
const liunianList66 = ref([]);
const liunianList67 = ref([]);
const liunianList68 = ref([]);
const liunianList69 = ref([]);

const liunianList70 = ref([]);
const liunianList71 = ref([]);
const liunianList72 = ref([]);
const liunianList73 = ref([]);
const liunianList74 = ref([]);
const liunianList75 = ref([]);
const liunianList76 = ref([]);
const liunianList77 = ref([]);
const liunianList78 = ref([]);
const liunianList79 = ref([]);

const liunianList80 = ref([]);
const liunianList81 = ref([]);
const liunianList82 = ref([]);
const liunianList83 = ref([]);
const liunianList84 = ref([]);
const liunianList85 = ref([]);
const liunianList86 = ref([]);
const liunianList87 = ref([]);
const liunianList88 = ref([]);
const liunianList89 = ref([]);
//#endregion

const textQiongtu = ref("...");
const textWei = ref("...");
const textZiPing = ref([]);
const textHeChong = ref(["--- 干支合冲 ---"]);

const fnShowAbout = () => {
  ElMessageBox.alert(
    '八字分析本身，就是一种统计学规律，有算不全的时候，更有算不准的情况。<br><br>' + 
    '可以理解成，古代的统计分析结果，用阴阳五行进行建模分析和拟合。所以尽量先用过去的经历来验证一下分析结果，如果有部分或者大部分符合，那么这个八字在建模的数据集内，对未来的预测也会大概率准确。<br><br>' +
    '如果不准就要根据以往的经历，再增加其他分析因子或者不同的生克规律，才能准确预测未来。这种新的因子或者生克规律（新的命理批语）只适合这一个八字，不具有普遍性。', 
    '关于八字命理分析', 
    {
      dangerouslyUseHTMLString: true,
      confirmButtonText: '确定',
      type: 'info',
      center: true
    }
  );
}

const fnProcessPaipan = (paipan) => {
    //console.info(paipan);
    var curYear= new Date().getFullYear();

    yearTg.value = paipan.bazi.slice(0, 1);
    yearDz.value = paipan.bazi.slice(1, 2);
    monthTg.value = paipan.bazi.slice(2, 3);
    monthDz.value = paipan.bazi.slice(3, 4);
    dayTg.value = paipan.bazi.slice(4, 5);
    dayDz.value = paipan.bazi.slice(5, 6);
    hourTg.value = paipan.bazi.slice(6, 7);
    hourDz.value = paipan.bazi.slice(7, 8);

    shenYearTg.value = fnComputeShishen( dayTg.value, yearTg.value );
    shenYearDz.value = fnComputeShishen( dayTg.value, yearDz.value );
    shenMonthTg.value = fnComputeShishen( dayTg.value, monthTg.value );
    shenMonthDz.value = fnComputeShishen( dayTg.value, monthDz.value );
    shenDayDz.value = fnComputeShishen( dayTg.value, dayDz.value );
    shenHourTg.value = fnComputeShishen( dayTg.value, hourTg.value );
    shenHourDz.value = fnComputeShishen( dayTg.value, hourDz.value );   

    lunarDate.value = yearTg.value + yearDz.value + ' ' + paipan.sx + '年 ' + fnConvertLunarMonth(paipan.lunar[1]) + '月 ' + fnConvertLunarDay(paipan.lunar[2])  + ' ' + hourDz.value + '时';
    bzXz.value = paipan.xz;
    bzQiyun.value = paipan.start_time[0] + '年' + paipan.start_time[1] + '月';

    bigyunList.value = [];
    bigyunIndex.value = 0;
    for( var ii = 0 ; ii < 8 ; ii++ ) {
      bigyunList.value.push({
        year: paipan.big_start_time[ii][0],
        age : paipan.big_start_time[ii][0] - bzYear.value,
        tg: paipan.big.slice(ii * 2, ii * 2 + 1 ),
        dz: paipan.big.slice(ii * 2 + 1, ii * 2 + 2 ),
      });

      if( paipan.big_start_time[ii][0] <= curYear) {
        bigyunIndex.value = ii;
      }
    }
    fnMakeLiuNian(paipan.big_start_time[0][0]);

    bigyunTg.value = bigyunList.value[bigyunIndex.value].tg;
    bigyunDz.value = bigyunList.value[bigyunIndex.value].dz;
    shenBigyunTg.value = fnComputeShishen( dayTg.value, bigyunTg.value );
    shenBigyunDz.value = fnComputeShishen( dayTg.value, bigyunDz.value ); 

    var liunianBegin = paipan.big_start_time[bigyunIndex.value][0];
    liunianList.value = [];
    liunianIndex.value = 0;
    for( var ii = 0 ; ii < 10 ; ii++ ) {
      liunianList.value.push({
        year: liunianBegin + ii,
        tg: '甲',
        dz: '子',
      });
      if( (liunianBegin + ii) <= curYear) {
        liunianIndex.value = ii;
      }
    }
    fnComputLiunianGZ( liunianBegin );
    liunianTg.value = liunianList.value[liunianIndex.value].tg;
    liunianDz.value = liunianList.value[liunianIndex.value].dz;
    shenLiunianTg.value = fnComputeShishen( dayTg.value, liunianTg.value );
    shenLiunianDz.value = fnComputeShishen( dayTg.value, liunianDz.value );

    //// 用于计算颜色
    hourTgColor.value = fnComputeColor( hourTg.value );
    hourDzColor.value = fnComputeColor( hourDz.value );
    dayTgColor.value = fnComputeColor( dayTg.value );
    dayDzColor.value = fnComputeColor( dayDz.value );
    monthTgColor.value = fnComputeColor( monthTg.value );
    monthDzColor.value = fnComputeColor( monthDz.value );
    yearTgColor.value = fnComputeColor( yearTg.value );
    yearDzColor.value = fnComputeColor( yearDz.value );
    bigyunTgColor.value = fnComputeColor( bigyunTg.value );
    bigyunDzColor.value = fnComputeColor( bigyunDz.value );
    liunianTgColor.value = fnComputeColor( liunianTg.value );
    liunianDzColor.value = fnComputeColor( liunianDz.value );

    //// 地支藏干
    dzcgYearList.value = fnComputeDzcg(dayTg.value, yearDz.value);
    dzcgMonthList.value =  fnComputeDzcg(dayTg.value, monthDz.value);
    dzcgDayList.value = fnComputeDzcg(dayTg.value, dayDz.value);
    dzcgHourList.value = fnComputeDzcg(dayTg.value, hourDz.value);
    dzcgBigyunList.value = fnComputeDzcg(dayTg.value, bigyunDz.value);
    dzcgLiunianList.value = fnComputeDzcg(dayTg.value, liunianDz.value);

    setTimeout(() => {
      fnGetHeChong(yearTg.value, yearDz.value, monthTg.value, monthDz.value, dayTg.value, dayDz.value, hourTg.value, hourDz.value, bigyunTg.value, bigyunDz.value, liunianTg.value, liunianDz.value); 
    }, 1500);
}

const fnMakeLiuNian = (year) => {
  var lnbazi, lntg, lndz;
  var curYear;

//#region 第一个大运的流年
  liunianList10.value = {};
  curYear = year;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList10.value.year = curYear;
  liunianList10.value.tg = lntg;
  liunianList10.value.dz = lndz;

  liunianList11.value = {};
  curYear = year + 1;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList11.value.year = curYear;
  liunianList11.value.tg = lntg;
  liunianList11.value.dz = lndz;

  liunianList12.value = {};
  curYear = year + 2;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList12.value.year = curYear;
  liunianList12.value.tg = lntg;
  liunianList12.value.dz = lndz;

  liunianList13.value = {};
  curYear = year + 3;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList13.value.year = curYear;
  liunianList13.value.tg = lntg;
  liunianList13.value.dz = lndz;

  liunianList14.value = {};
  curYear = year + 4;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList14.value.year = curYear;
  liunianList14.value.tg = lntg;
  liunianList14.value.dz = lndz;

  liunianList15.value = {};
  curYear = year + 5;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList15.value.year = curYear;
  liunianList15.value.tg = lntg;
  liunianList15.value.dz = lndz;

  liunianList16.value = {};
  curYear = year + 6;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList16.value.year = curYear;
  liunianList16.value.tg = lntg;
  liunianList16.value.dz = lndz;

  liunianList17.value = {};
  curYear = year + 7;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList17.value.year = curYear;
  liunianList17.value.tg = lntg;
  liunianList17.value.dz = lndz;

  liunianList18.value = {};
  curYear = year + 8;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList18.value.year = curYear;
  liunianList18.value.tg = lntg;
  liunianList18.value.dz = lndz;

  liunianList19.value = {};
  curYear = year + 9;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList19.value.year = curYear;
  liunianList19.value.tg = lntg;
  liunianList19.value.dz = lndz;
//#endregion

//#region 第二个大运的流年
  liunianList20.value = {};
  curYear = year + 10;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList20.value.year = curYear;
  liunianList20.value.tg = lntg;
  liunianList20.value.dz = lndz;

  liunianList21.value = {};
  curYear = year + 11;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList21.value.year = curYear;
  liunianList21.value.tg = lntg;
  liunianList21.value.dz = lndz;

  liunianList22.value = {};
  curYear = year + 12;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList22.value.year = curYear;
  liunianList22.value.tg = lntg;
  liunianList22.value.dz = lndz;

  liunianList23.value = {};
  curYear = year + 13;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList23.value.year = curYear;
  liunianList23.value.tg = lntg;
  liunianList23.value.dz = lndz;

  liunianList24.value = {};
  curYear = year + 14;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList24.value.year = curYear;
  liunianList24.value.tg = lntg;
  liunianList24.value.dz = lndz;

  liunianList25.value = {};
  curYear = year + 15;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList25.value.year = curYear;
  liunianList25.value.tg = lntg;
  liunianList25.value.dz = lndz;

  liunianList26.value = {};
  curYear = year + 16;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList26.value.year = curYear;
  liunianList26.value.tg = lntg;
  liunianList26.value.dz = lndz;

  liunianList27.value = {};
  curYear = year + 17;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList27.value.year = curYear;
  liunianList27.value.tg = lntg;
  liunianList27.value.dz = lndz;

  liunianList28.value = {};
  curYear = year + 18;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList28.value.year = curYear;
  liunianList28.value.tg = lntg;
  liunianList28.value.dz = lndz;

  liunianList29.value = {};
  curYear = year + 19;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList29.value.year = curYear;
  liunianList29.value.tg = lntg;
  liunianList29.value.dz = lndz;
  
//#endregion
  
//#region 第三个大运的流年
  
/// 生成 30-39 的流年
  liunianList30.value = {};
  curYear = year + 20;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList30.value.year = curYear;
  liunianList30.value.tg = lntg;
  liunianList30.value.dz = lndz;

  liunianList31.value = {};
  curYear = year + 21;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList31.value.year = curYear;
  liunianList31.value.tg = lntg;
  liunianList31.value.dz = lndz;

  liunianList32.value = {};
  curYear = year + 22;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList32.value.year = curYear;
  liunianList32.value.tg = lntg;
  liunianList32.value.dz = lndz;

  liunianList33.value = {};
  curYear = year + 23;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList33.value.year = curYear;
  liunianList33.value.tg = lntg;
  liunianList33.value.dz = lndz;

  liunianList34.value = {};
  curYear = year + 24;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList34.value.year = curYear;
  liunianList34.value.tg = lntg;
  liunianList34.value.dz = lndz;

  liunianList35.value = {};
  curYear = year + 25;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList35.value.year = curYear;
  liunianList35.value.tg = lntg;
  liunianList35.value.dz = lndz;

  liunianList36.value = {};
  curYear = year + 26;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList36.value.year = curYear;
  liunianList36.value.tg = lntg;
  liunianList36.value.dz = lndz;

  liunianList37.value = {};
  curYear = year + 27;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList37.value.year = curYear;
  liunianList37.value.tg = lntg;
  liunianList37.value.dz = lndz;

  liunianList38.value = {};
  curYear = year + 28;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList38.value.year = curYear;
  liunianList38.value.tg = lntg;
  liunianList38.value.dz = lndz;

  liunianList39.value = {};
  curYear = year + 29;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList39.value.year = curYear;
  liunianList39.value.tg = lntg;
  liunianList39.value.dz = lndz;

//#endregion

//#region 第四个大运的流年 
  liunianList40.value = {};
  curYear = year + 30;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList40.value.year = curYear;
  liunianList40.value.tg = lntg;
  liunianList40.value.dz = lndz;

  liunianList41.value = {};
  curYear = year + 31;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList41.value.year = curYear;
  liunianList41.value.tg = lntg;
  liunianList41.value.dz = lndz;

  liunianList42.value = {};
  curYear = year + 32;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList42.value.year = curYear;
  liunianList42.value.tg = lntg;
  liunianList42.value.dz = lndz;

  liunianList43.value = {};
  curYear = year + 33;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList43.value.year = curYear;
  liunianList43.value.tg = lntg;
  liunianList43.value.dz = lndz;

  liunianList44.value = {};
  curYear = year + 34;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList44.value.year = curYear;
  liunianList44.value.tg = lntg;
  liunianList44.value.dz = lndz;

  liunianList45.value = {};
  curYear = year + 35;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList45.value.year = curYear;
  liunianList45.value.tg = lntg;
  liunianList45.value.dz = lndz;

  liunianList46.value = {};
  curYear = year + 36;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList46.value.year = curYear;
  liunianList46.value.tg = lntg;
  liunianList46.value.dz = lndz;

  liunianList47.value = {};
  curYear = year + 37;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList47.value.year = curYear;
  liunianList47.value.tg = lntg;
  liunianList47.value.dz = lndz;

  liunianList48.value = {};
  curYear = year + 38;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList48.value.year = curYear;
  liunianList48.value.tg = lntg;
  liunianList48.value.dz = lndz;

  liunianList49.value = {};
  curYear = year + 39;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList49.value.year = curYear;
  liunianList49.value.tg = lntg;
  liunianList49.value.dz = lndz;

//#endregion

//#region 第五个大运的流年

  liunianList50.value = {};
  curYear = year + 40;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList50.value.year = curYear;
  liunianList50.value.tg = lntg;
  liunianList50.value.dz = lndz;

  liunianList51.value = {};
  curYear = year + 41;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList51.value.year = curYear;
  liunianList51.value.tg = lntg;
  liunianList51.value.dz = lndz;

  liunianList52.value = {};
  curYear = year + 42;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList52.value.year = curYear;
  liunianList52.value.tg = lntg;
  liunianList52.value.dz = lndz;

  liunianList53.value = {};
  curYear = year + 43;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList53.value.year = curYear;
  liunianList53.value.tg = lntg;
  liunianList53.value.dz = lndz;

  liunianList54.value = {};
  curYear = year + 44;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList54.value.year = curYear;
  liunianList54.value.tg = lntg;
  liunianList54.value.dz = lndz;

  liunianList55.value = {};
  curYear = year + 45;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList55.value.year = curYear;
  liunianList55.value.tg = lntg;
  liunianList55.value.dz = lndz;

  liunianList56.value = {};
  curYear = year + 46;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList56.value.year = curYear;
  liunianList56.value.tg = lntg;
  liunianList56.value.dz = lndz;

  liunianList57.value = {};
  curYear = year + 47;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList57.value.year = curYear;
  liunianList57.value.tg = lntg;
  liunianList57.value.dz = lndz;

  liunianList58.value = {};
  curYear = year + 48;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList58.value.year = curYear;
  liunianList58.value.tg = lntg;
  liunianList58.value.dz = lndz;

  liunianList59.value = {};
  curYear = year + 49;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList59.value.year = curYear;
  liunianList59.value.tg = lntg;
  liunianList59.value.dz = lndz;

//#endregion

//#region 第六个大运的流年

  liunianList60.value = {};
  curYear = year + 50;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList60.value.year = curYear;
  liunianList60.value.tg = lntg;
  liunianList60.value.dz = lndz;

  liunianList61.value = {};
  curYear = year + 51;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList61.value.year = curYear;
  liunianList61.value.tg = lntg;
  liunianList61.value.dz = lndz;

  liunianList62.value = {};
  curYear = year + 52;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList62.value.year = curYear;
  liunianList62.value.tg = lntg;
  liunianList62.value.dz = lndz;

  liunianList63.value = {};
  curYear = year + 53;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList63.value.year = curYear;
  liunianList63.value.tg = lntg;
  liunianList63.value.dz = lndz;

  liunianList64.value = {};
  curYear = year + 54;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList64.value.year = curYear;
  liunianList64.value.tg = lntg;
  liunianList64.value.dz = lndz;

  liunianList65.value = {};
  curYear = year + 55;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList65.value.year = curYear;
  liunianList65.value.tg = lntg;
  liunianList65.value.dz = lndz;

  liunianList66.value = {};
  curYear = year + 56;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList66.value.year = curYear;
  liunianList66.value.tg = lntg;
  liunianList66.value.dz = lndz;

  liunianList67.value = {};
  curYear = year + 57;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList67.value.year = curYear;
  liunianList67.value.tg = lntg;
  liunianList67.value.dz = lndz;

  liunianList68.value = {};
  curYear = year + 58;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList68.value.year = curYear;
  liunianList68.value.tg = lntg;
  liunianList68.value.dz = lndz;

  liunianList69.value = {};
  curYear = year + 59;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList69.value.year = curYear;
  liunianList69.value.tg = lntg;
  liunianList69.value.dz = lndz;

//#endregion

//#region 第七个大运的流年

  liunianList70.value = {};
  curYear = year + 60;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList70.value.year = curYear;
  liunianList70.value.tg = lntg;
  liunianList70.value.dz = lndz;

  liunianList71.value = {};
  curYear = year + 61;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList71.value.year = curYear;
  liunianList71.value.tg = lntg;
  liunianList71.value.dz = lndz;

  liunianList72.value = {};
  curYear = year + 62;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList72.value.year = curYear;
  liunianList72.value.tg = lntg;
  liunianList72.value.dz = lndz;

  liunianList73.value = {};
  curYear = year + 63;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList73.value.year = curYear;
  liunianList73.value.tg = lntg;
  liunianList73.value.dz = lndz;

  liunianList74.value = {};
  curYear = year + 64;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList74.value.year = curYear;
  liunianList74.value.tg = lntg;
  liunianList74.value.dz = lndz;

  liunianList75.value = {};
  curYear = year + 65;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList75.value.year = curYear;
  liunianList75.value.tg = lntg;
  liunianList75.value.dz = lndz;

  liunianList76.value = {};
  curYear = year + 66;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList76.value.year = curYear;
  liunianList76.value.tg = lntg;
  liunianList76.value.dz = lndz;

  liunianList77.value = {};
  curYear = year + 67;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList77.value.year = curYear;
  liunianList77.value.tg = lntg;
  liunianList77.value.dz = lndz;

  liunianList78.value = {};
  curYear = year + 68;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList78.value.year = curYear;
  liunianList78.value.tg = lntg;
  liunianList78.value.dz = lndz;

  liunianList79.value = {};
  curYear = year + 69;
  lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
  lntg = lnbazi.bazi.slice(0, 1);
  lndz = lnbazi.bazi.slice(1, 2);
  liunianList79.value.year = curYear;
  liunianList79.value.tg = lntg;
  liunianList79.value.dz = lndz;

//#endregion

//#region 第八个大运的流年
  
    liunianList80.value = {};
    curYear = year + 70;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList80.value.year = curYear;
    liunianList80.value.tg = lntg;
    liunianList80.value.dz = lndz;
  
    liunianList81.value = {};
    curYear = year + 71;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList81.value.year = curYear;
    liunianList81.value.tg = lntg;
    liunianList81.value.dz = lndz;
  
    liunianList82.value = {};
    curYear = year + 72;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList82.value.year = curYear;
    liunianList82.value.tg = lntg;
    liunianList82.value.dz = lndz;
  
    liunianList83.value = {};
    curYear = year + 73;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList83.value.year = curYear;
    liunianList83.value.tg = lntg;
    liunianList83.value.dz = lndz;
  
    liunianList84.value = {};
    curYear = year + 74;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList84.value.year = curYear;
    liunianList84.value.tg = lntg;
    liunianList84.value.dz = lndz;
  
    liunianList85.value = {};
    curYear = year + 75;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList85.value.year = curYear;
    liunianList85.value.tg = lntg;
    liunianList85.value.dz = lndz;
  
    liunianList86.value = {};
    curYear = year + 76;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList86.value.year = curYear;
    liunianList86.value.tg = lntg;
    liunianList86.value.dz = lndz;
  
    liunianList87.value = {};
    curYear = year + 77;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList87.value.year = curYear;
    liunianList87.value.tg = lntg;
    liunianList87.value.dz = lndz;
  
    liunianList88.value = {};
    curYear = year + 78;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList88.value.year = curYear;
    liunianList88.value.tg = lntg;
    liunianList88.value.dz = lndz;
  
    liunianList89.value = {};
    curYear = year + 79;
    lnbazi = paipan( 0, curYear, 6, 1, 1, 1, 1);
    lntg = lnbazi.bazi.slice(0, 1);
    lndz = lnbazi.bazi.slice(1, 2);
    liunianList89.value.year = curYear;
    liunianList89.value.tg = lntg;
    liunianList89.value.dz = lndz;

//#endregion

}

const fnSelDateTime = () => {
  bShowSelectDate.value = false;

  bzYear.value = selYear.value;
  bzMonth.value = selMonth.value;
  bzDay.value = selDay.value;
  bzHour.value = selHour.value;
  bzMinute.value = 30;
  bzSecond.value = 20;
  boolSex.value = selBoolSex.value;

  //fnUserRunAnalysis();  
  fnComputeBazi();

  menuBar.boolSex = boolSex.value;
  menuBar.bzYear = bzYear.value;
  menuBar.bzMonth = bzMonth.value;
  menuBar.bzDay = bzDay.value;
  menuBar.bzHour = bzHour.value;

}

const fnComputeBazi = () => {
  var bazi = paipan(boolSex.value, bzYear.value, bzMonth.value, bzDay.value, bzHour.value, bzMinute.value, bzSecond.value);
  fnProcessPaipan(bazi);

  var tg = '甲乙丙丁戊己庚辛壬癸'; //char of TianGan
	var dz = '子丑寅卯辰巳午未申酉戌亥'; //char of DiZhi

  var daytgnum = tg.indexOf(dayTg.value);
  var monthdznum = dz.indexOf(monthDz.value);
  fnGetQtbj(daytgnum, monthdznum);
  
  var hourdznum = dz.indexOf(hourDz.value);
  fnGetWei(daytgnum, monthdznum, hourdznum);

  //fnGetZiPing();

  fnAnalysisSelf();

}

const fnDayunClick = (idx, bGet) => {
  bigyunIndex.value = idx;
  bigyunTg.value = bigyunList.value[idx].tg;
  bigyunDz.value = bigyunList.value[idx].dz;

  shenBigyunTg.value = fnComputeShishen( dayTg.value, bigyunTg.value );
  shenBigyunDz.value = fnComputeShishen( dayTg.value, bigyunDz.value ); 

  liunianIndex.value = 0;
  var liunianBegin = bigyunList.value[idx].year;
  liunianList.value = [];
  for( var ii = 0 ; ii < 10 ; ii++ ) {
    liunianList.value.push({
      year: liunianBegin + ii,
      tg: '甲',
      dz: '子',
    });  
  }
  fnComputLiunianGZ( liunianBegin );
  liunianTg.value = liunianList.value[0].tg;
  liunianDz.value = liunianList.value[0].dz;

  shenLiunianTg.value = fnComputeShishen( dayTg.value, liunianTg.value );
  shenLiunianDz.value = fnComputeShishen( dayTg.value, liunianDz.value );

  dzcgBigyunList.value = fnComputeDzcg(dayTg.value, bigyunDz.value);
  dzcgLiunianList.value = fnComputeDzcg(dayTg.value, liunianDz.value);

  bigyunTgColor.value = fnComputeColor( bigyunTg.value );
  bigyunDzColor.value = fnComputeColor( bigyunDz.value );
  liunianTgColor.value = fnComputeColor( liunianTg.value );
  liunianDzColor.value = fnComputeColor( liunianDz.value );

  if( bGet == true ) {
    fnGetHeChong(yearTg.value, yearDz.value, monthTg.value, monthDz.value, dayTg.value, dayDz.value, hourTg.value, hourDz.value, bigyunTg.value, bigyunDz.value, liunianTg.value, liunianDz.value); 
  }

}

const fnLiunianClick = (idx) => {
  liunianIndex.value = idx;
  liunianTg.value = liunianList.value[idx].tg;
  liunianDz.value = liunianList.value[idx].dz;

  shenLiunianTg.value = fnComputeShishen( dayTg.value, liunianTg.value );
  shenLiunianDz.value = fnComputeShishen( dayTg.value, liunianDz.value );

  dzcgLiunianList.value = fnComputeDzcg(dayTg.value, liunianDz.value);

  liunianTgColor.value = fnComputeColor( liunianTg.value );
  liunianDzColor.value = fnComputeColor( liunianDz.value );

}

const fnGetLiunianGanZhi = (lnidx, dyidx) => {
  var lntg = '';
  var lndz = '';

  switch(dyidx) {
    case 0:
      switch(lnidx) {
        case 0:
          lntg = liunianList10.value.tg;
          lndz = liunianList10.value.dz;
          break;
        case 1:
          lntg = liunianList11.value.tg;
          lndz = liunianList11.value.dz;
          break;
        case 2:
          lntg = liunianList12.value.tg;
          lndz = liunianList12.value.dz;
          break;
        case 3:
          lntg = liunianList13.value.tg;
          lndz = liunianList13.value.dz;
          break;
        case 4:
          lntg = liunianList14.value.tg;
          lndz = liunianList14.value.dz;
          break;
        case 5:
          lntg = liunianList15.value.tg;
          lndz = liunianList15.value.dz;
          break;
        case 6:
          lntg = liunianList16.value.tg;
          lndz = liunianList16.value.dz;
          break;
        case 7:
          lntg = liunianList17.value.tg;
          lndz = liunianList17.value.dz;
          break;
        case 8:
          lntg = liunianList18.value.tg;
          lndz = liunianList18.value.dz;
          break;
        case 9:
          lntg = liunianList19.value.tg;
          lndz = liunianList19.value.dz;
          break;
        default:
          break;
      }
    break;
    case 1:
      switch(lnidx) {
        case 0:
          lntg = liunianList20.value.tg;
          lndz = liunianList20.value.dz;
          break;
        case 1:
          lntg = liunianList21.value.tg;
          lndz = liunianList21.value.dz;
          break;
        case 2:
          lntg = liunianList22.value.tg;
          lndz = liunianList22.value.dz;
          break;
        case 3:
          lntg = liunianList23.value.tg;
          lndz = liunianList23.value.dz;
          break;
        case 4:
          lntg = liunianList24.value.tg;
          lndz = liunianList24.value.dz;
          break;
        case 5:
          lntg = liunianList25.value.tg;
          lndz = liunianList25.value.dz;
          break;
        case 6:
          lntg = liunianList26.value.tg;
          lndz = liunianList26.value.dz;
          break;
        case 7:
          lntg = liunianList27.value.tg;
          lndz = liunianList27.value.dz;
          break;
        case 8:
          lntg = liunianList28.value.tg;
          lndz = liunianList28.value.dz;
          break;
        case 9:
          lntg = liunianList29.value.tg;
          lndz = liunianList29.value.dz;
          break;
        default:
          break;
      }
    break;
    case 2:
      switch(lnidx) {
        case 0:
          lntg = liunianList30.value.tg;
          lndz = liunianList30.value.dz;
          break;
        case 1:
          lntg = liunianList31.value.tg;
          lndz = liunianList31.value.dz;
          break;
        case 2:
          lntg = liunianList32.value.tg;
          lndz = liunianList32.value.dz;
          break;
        case 3:
          lntg = liunianList33.value.tg;
          lndz = liunianList33.value.dz;
          break;
        case 4:
          lntg = liunianList34.value.tg;
          lndz = liunianList34.value.dz;
          break;
        case 5:
          lntg = liunianList35.value.tg;
          lndz = liunianList35.value.dz;
          break;
        case 6:
          lntg = liunianList36.value.tg;
          lndz = liunianList36.value.dz;
          break;
        case 7:
          lntg = liunianList37.value.tg;
          lndz = liunianList37.value.dz;
          break;
        case 8:
          lntg = liunianList38.value.tg;
          lndz = liunianList38.value.dz;
          break;
        case 9:
          lntg = liunianList39.value.tg;
          lndz = liunianList39.value.dz;
          break;
        default:
          break;
      }
    break;
    case 3:
      switch(lnidx) {
        case 0:
          lntg = liunianList40.value.tg;
          lndz = liunianList40.value.dz;
          break;
        case 1:
          lntg = liunianList41.value.tg;
          lndz = liunianList41.value.dz;
          break;
        case 2:
          lntg = liunianList42.value.tg;
          lndz = liunianList42.value.dz;
          break;
        case 3:
          lntg = liunianList43.value.tg;
          lndz = liunianList43.value.dz;
          break;
        case 4:
          lntg = liunianList44.value.tg;
          lndz = liunianList44.value.dz;
          break;
        case 5:
          lntg = liunianList45.value.tg;
          lndz = liunianList45.value.dz;
          break;
        case 6:
          lntg = liunianList46.value.tg;
          lndz = liunianList46.value.dz;
          break;
        case 7:
          lntg = liunianList47.value.tg;
          lndz = liunianList47.value.dz;
          break;
        case 8:
          lntg = liunianList48.value.tg;
          lndz = liunianList48.value.dz;
          break;
        case 9:
          lntg = liunianList49.value.tg;
          lndz = liunianList49.value.dz;
          break;
        default:
          break;
      }
    break;
    case 4:
      switch(lnidx) {
        case 0:
          lntg = liunianList50.value.tg;
          lndz = liunianList50.value.dz;
          break;
        case 1:
          lntg = liunianList51.value.tg;
          lndz = liunianList51.value.dz;
          break;
        case 2:
          lntg = liunianList52.value.tg;
          lndz = liunianList52.value.dz;
          break;
        case 3:
          lntg = liunianList53.value.tg;
          lndz = liunianList53.value.dz;
          break;
        case 4:
          lntg = liunianList54.value.tg;
          lndz = liunianList54.value.dz;
          break;
        case 5:
          lntg = liunianList55.value.tg;
          lndz = liunianList55.value.dz;
          break;
        case 6:
          lntg = liunianList56.value.tg;
          lndz = liunianList56.value.dz;
          break;
        case 7:
          lntg = liunianList57.value.tg;
          lndz = liunianList57.value.dz;
          break;
        case 8:
          lntg = liunianList58.value.tg;
          lndz = liunianList58.value.dz;
          break;
        case 9:
          lntg = liunianList59.value.tg;
          lndz = liunianList59.value.dz;
          break;
        default:
          break;
      }
    break;
    case 5:
      switch(lnidx) {
        case 0:
          lntg = liunianList60.value.tg;
          lndz = liunianList60.value.dz;
          break;
        case 1:
          lntg = liunianList61.value.tg;
          lndz = liunianList61.value.dz;
          break;
        case 2:
          lntg = liunianList62.value.tg;
          lndz = liunianList62.value.dz;
          break;
        case 3:
          lntg = liunianList63.value.tg;
          lndz = liunianList63.value.dz;
          break;
        case 4:
          lntg = liunianList64.value.tg;
          lndz = liunianList64.value.dz;
          break;
        case 5:
          lntg = liunianList65.value.tg;
          lndz = liunianList65.value.dz;
          break;
        case 6:
          lntg = liunianList66.value.tg;
          lndz = liunianList66.value.dz;
          break;
        case 7:
          lntg = liunianList67.value.tg;
          lndz = liunianList67.value.dz;
          break;
        case 8:
          lntg = liunianList68.value.tg;
          lndz = liunianList68.value.dz;
          break;
        case 9:
          lntg = liunianList69.value.tg;
          lndz = liunianList69.value.dz;
          break;
        default:
          break;
      }
    break;
    case 6:
      switch(lnidx) {
        case 0:
          lntg = liunianList70.value.tg;
          lndz = liunianList70.value.dz;
          break;
        case 1:
          lntg = liunianList71.value.tg;
          lndz = liunianList71.value.dz;
          break;
        case 2:
          lntg = liunianList72.value.tg;
          lndz = liunianList72.value.dz;
          break;
        case 3:
          lntg = liunianList73.value.tg;
          lndz = liunianList73.value.dz;
          break;
        case 4:
          lntg = liunianList74.value.tg;
          lndz = liunianList74.value.dz;
          break;
        case 5:
          lntg = liunianList75.value.tg;
          lndz = liunianList75.value.dz;
          break;
        case 6:
          lntg = liunianList76.value.tg;
          lndz = liunianList76.value.dz;
          break;
        case 7:
          lntg = liunianList77.value.tg;
          lndz = liunianList77.value.dz;
          break;
        case 8:
          lntg = liunianList78.value.tg;
          lndz = liunianList78.value.dz;
          break;
        case 9:
          lntg = liunianList79.value.tg;
          lndz = liunianList79.value.dz;
          break;
        default:
          break;
      }
    break;
    case 7:
      switch(lnidx) {
        case 0:
          lntg = liunianList80.value.tg;
          lndz = liunianList80.value.dz;
          break;
        case 1:
          lntg = liunianList81.value.tg;
          lndz = liunianList81.value.dz;
          break;
        case 2:
          lntg = liunianList82.value.tg;
          lndz = liunianList82.value.dz;
          break;
        case 3:
          lntg = liunianList83.value.tg;
          lndz = liunianList83.value.dz;
          break;
        case 4:
          lntg = liunianList84.value.tg;
          lndz = liunianList84.value.dz;
          break;
        case 5:
          lntg = liunianList85.value.tg;
          lndz = liunianList85.value.dz;
          break;
        case 6:
          lntg = liunianList86.value.tg
          lndz = liunianList86.value.dz;
          break;
        case 7:
          lntg = liunianList87.value.tg;
          lndz = liunianList87.value.dz;
          break;
        case 8:
          lntg = liunianList88.value.tg;
          lndz = liunianList88.value.dz;
          break;
        case 9:
          lntg = liunianList89.value.tg;
          lndz = liunianList89.value.dz;
          break;
        default:
          break;
      }
    break;
    default:
      break;
  }

  return { tg: lntg, dz: lndz};
}

const fnLiunianClick2 = (lnidx, dyidx) => {

  fnDayunClick(dyidx, false);

  let ln = fnGetLiunianGanZhi(lnidx, dyidx);
  liunianIndex.value = lnidx;
  liunianTg.value = ln.tg;
  liunianDz.value = ln.dz;

  shenLiunianTg.value = fnComputeShishen( dayTg.value, liunianTg.value );
  shenLiunianDz.value = fnComputeShishen( dayTg.value, liunianDz.value );

  dzcgLiunianList.value = fnComputeDzcg(dayTg.value, liunianDz.value);

  liunianTgColor.value = fnComputeColor( liunianTg.value );
  liunianDzColor.value = fnComputeColor( liunianDz.value );
  
  fnGetHeChong(yearTg.value, yearDz.value, monthTg.value, monthDz.value, dayTg.value, dayDz.value, hourTg.value, hourDz.value, bigyunTg.value, bigyunDz.value, liunianTg.value, liunianDz.value); 

}

const fnComputLiunianGZ = ( year ) => {

  var bazi;
  
  for( var ii = 0 ; ii < 10 ; ii++ ) {
    bazi = paipan( 0, year + ii, 6, 1, 1, 1, 1);
    liunianList.value[ii].tg = bazi.bazi.slice(0, 1);
    liunianList.value[ii].dz = bazi.bazi.slice(1, 2);
  }

}

const fnComputeColor = (fe) => {
  var rtn = '';
  var tg = '甲乙丙丁戊己庚辛壬癸'; //char of TianGan
  //var tg5 = ['阳木', '阴木', '阳火', '阴火', '阳土', '阴土', '阳金', '阴金', '阳水', '阴水']; 
  var dz = '子丑寅卯辰巳午未申酉戌亥'; //char of DiZhi
  //var dz5 = ['阳水', '阴土', '阳木', '阴木', '阳土', '阴火', '阳火', '阴土', '阳金', '阴金', '阳土', '阴水'];

  var tgIdx = tg.indexOf(fe);
  if( tgIdx == 0 || tgIdx == 1 ) {
    rtn = 'green';
  }
  else if( tgIdx == 2 || tgIdx == 3 ) {
    rtn = 'red';
  }
  else if( tgIdx == 4 || tgIdx == 5 ) {
    rtn = 'grey';
  }
  else if( tgIdx == 6 || tgIdx == 7 ) {
    rtn = 'white';
  }
  else if( tgIdx == 8 || tgIdx == 9 ) {
    rtn = '#10c0b0';
  }
  else {
    tgIdx = dz.indexOf(fe);
    if( tgIdx == 0 || tgIdx == 11 ) {
      rtn = '#10c0b0';
    }
    else if( tgIdx == 1 || tgIdx == 4 || tgIdx == 7 || tgIdx == 10 ) {
      rtn = 'grey';
    }
    else if( tgIdx == 5 || tgIdx == 6 ) {
      rtn = 'red';
    }
    else if( tgIdx == 2 || tgIdx == 3 ) {
      rtn = 'green';
    }
    else if( tgIdx == 8 || tgIdx == 9 ) {
      rtn = 'white';
    }
    else {
      rtn = 'black';
    }
  }
  return rtn;
}

//#endregion

//#region explain data

const fnGetWei = ( dayh, monthh, timee ) => {
  /*
  var explanation = '';
  for( var ii = 0; ii < wei.length; ii++ ){
    if( wei[ii].DAYH == dayh && wei[ii].MONTHE == monthh && wei[ii].TIMEE == timee ){
      explanation = wei[ii].EXPLANATION;
      break;
    }
  }
  return explanation;
  */
  var uuu = {};
    uuu.key = paipanKey;
    uuu.dayh = dayh;
    uuu.monthh = monthh;
    uuu.timee = timee;
    axios.post(curUrl.value + "/api/analysis/wei",
      uuu
    ).then((res) => {
      const oo = res.data;
      if( oo.code == 1000) {
          textWei.value = oo.result;
      }
      else {
          ElMessage(oo.msg);
      }
    }).catch(err => {
      console.log(err)
      ElMessage('未知错误');
    });

}

const fnGetQtbj = ( dayh, monthh ) => {
  /*
  var explanation = '';
  for( var ii = 0; ii < qtbj.length; ii++ ){
    if( qtbj[ii].DAYH == dayh && qtbj[ii].MONTHE == monthh ){
      explanation = qtbj[ii].EXPLANATION;
      break;
    }
  }
  return explanation;
  */

  var uuu = {};
    uuu.key = paipanKey;
    uuu.dayh = dayh;
    uuu.monthh = monthh;
    axios.post(curUrl.value + "/api/analysis/qtbj",
      uuu
    ).then((res) => {
      const oo = res.data;
      if( oo.code == 1000) {
          textQiongtu.value = oo.result;
      }
      else {
          ElMessage(oo.msg);
      }
    }).catch(err => {
      console.log(err)
      ElMessage('未知错误');
    });

}

//#endregion

//#region zi ping data
const zpVersion = ref('');
const zpDayTg = ref('');
const zpDayDz = ref('');
const zpMonthTg = ref('');
const zpMonthDz = ref('');
const zpYearTg = ref('');
const zpYearDz = ref('');
const zpHourTg = ref('');
const zpHourDz = ref('');
const zpInfo = ref('');
var zpSheng, zpKe, zpXiYong;

const fnGetZiPing = () => { //// 子平法八字分析 
  zpVersion.value = '子平法八字分析版本 240201。';
  console.info(zpVersion.value);
  zpSheng = fnComputeShengKe('生');
  zpKe = fnComputeShengKe('克');
  zpXiYong = fnComputeXiYong();
  let benMing = fnGz2Wu(dayTg.value);

  zpDayTg.value   = '日干（本命）： ' + dayTg.value + '（' + benMing + ', 主），本命 ' + benMing + '，生助' + zpSheng + '，克泄' + zpKe + ', 喜用为' + zpXiYong + ', ' + fnWuHelp(zpXiYong);
  zpDayDz.value   = '日支（婚姻）： ' + dayDz.value + '（' + fnGz2Wu(dayDz.value) + ', ' + shenDayDz.value + '），夫妻关系，大运流年冲克婚宫后，已婚可导致夫妻矛盾，未婚则进入婚恋。';
  zpMonthTg.value = '月干（事业）： ' + monthTg.value + '（' + fnGz2Wu(monthTg.value) + ', ' + shenMonthTg.value + '），代表事业。干支一起代表青年境遇。';
  zpMonthDz.value = '月支（命运）： ' + monthDz.value + '（' + fnGz2Wu(monthDz.value) + ', ' + shenMonthDz.value + '），与西方12星座相似，代表性格命运。';
  zpYearTg.value = '年干（父亲）： ' + yearTg.value + '（' + fnGz2Wu(yearTg.value) + ', ' + shenYearTg.value + '），与父亲关系，有冲克可影响老人健康。干支一起代表少年境遇。';
  zpYearDz.value = '年支（母亲）： ' + yearDz.value + '（' + fnGz2Wu(yearDz.value) + ', ' + shenYearDz.value + '），与母亲关系，有冲克可影响老人健康。本命生肖，生肖生克对八字相配有部分影响。';
  zpHourTg.value = '时干（子女）： ' + hourTg.value + '（' + fnGz2Wu(hourTg.value) + ', ' + shenHourTg.value + '），代表儿女亲疏。。干支一起代表晚年境遇。' ;
  zpHourDz.value = '时支（疾厄）： ' + hourDz.value + '（' + fnGz2Wu(hourDz.value) + ', ' + shenHourDz.value + '），身体健康状态。' ;
  fnZiPingInfo();
}

const fnGz2Wu = (gz) => {  //// 干支转阴阳五行 
  let rtn = '';
  //var tg = '甲乙丙丁戊己庚辛壬癸'; //char of TianGan
  //var tg5 = ['阳木', '阴木', '阳火', '阴火', '阳土', '阴土', '阳金', '阴金', '阳水', '阴水']; 
  //var dz = '子丑寅卯辰巳午未申酉戌亥'; //char of DiZhi
  //var dz5 = ['阳水', '阴土', '阳木', '阴木', '阳土', '阴火', '阳火', '阴土', '阳金', '阴金', '阳土', '阴水'];

  switch(gz) {
    case '甲': rtn = '阳木'; break;
    case '乙': rtn = '阴木'; break;
    case '丙': rtn = '阳火'; break;
    case '丁': rtn = '阴火'; break;
    case '戊': rtn = '阳土'; break;
    case '己': rtn = '阴土'; break;
    case '庚': rtn = '阳金'; break;
    case '辛': rtn = '阴金'; break;
    case '壬': rtn = '阳水'; break;
    case '癸': rtn = '阴水'; break;
    case '子': rtn = '阳水'; break;
    case '丑': rtn = '阴土'; break;
    case '寅': rtn = '阳木'; break;
    case '卯': rtn = '阴木'; break;
    case '辰': rtn = '阳土'; break;
    case '巳': rtn = '阴火'; break;
    case '午': rtn = '阳火'; break;
    case '未': rtn = '阴土'; break;
    case '申': rtn = '阳金'; break;
    case '酉': rtn = '阴金'; break;
    case '戌': rtn = '阳土'; break;
    case '亥': rtn = '阴水'; break;
  }
  return rtn;
}

const fnComputeShengKe = (sk) => { //// 计算生克力量 
  let rtn = 0, sheng = 1, ke = 0;
  
  if( fnComputeShengKeShen(shenDayDz.value) > 0 ) {
    sheng = sheng + 1;
  }
  else {
    ke = ke + 1;
  }
  if( fnComputeShengKeShen(shenMonthTg.value) > 0 ) {
    sheng = sheng + 1;
  }
  else {
    ke = ke + 1;
  }
  if( fnComputeShengKeShen(shenMonthDz.value) > 0 ) {
    sheng = sheng + 1;
  }
  else {
    ke = ke + 1;
  }
  if( fnComputeShengKeShen(shenYearTg.value) > 0 ) {
    sheng = sheng + 1;
  }
  else {
    ke = ke + 1;
  }
  if( fnComputeShengKeShen(shenYearDz.value) > 0 ) {
    sheng = sheng + 1;
  }
  else {
    ke = ke + 1;
  }
  if( fnComputeShengKeShen(shenHourTg.value) > 0 ) {
    sheng = sheng + 1;
  }
  else {
    ke = ke + 1;
  }
  if( fnComputeShengKeShen(shenHourDz.value) > 0 ) {
    sheng = sheng + 1;
  }
  else {
    ke = ke + 1;
  }
  
  if( sk == '生') {
    rtn = sheng;
  }
  if( sk == '克') {
    rtn = ke;
  }
  return rtn;
}
const fnComputeShengKeShen = (shen) => { /// 用十神计算生克 
  switch(shen) {
    case '比': return 1;
    case '劫': return 1;
    case '官': return -1;
    case '煞': return -1;
    case '印': return 1;
    case '枭': return 1;
    case '食': return -1;
    case '伤': return -1;
    case '财': return -1;
    case '才': return -1;
  }
  return 0;
}

const fnComputeXiYong = () => {
  let rtn = ''
  if( zpKe > zpSheng ) {  /// 用印
    switch(dayTg.value) {
      case '甲': rtn = '水'; break;
      case '乙': rtn = '水'; break;
      case '丙': rtn = '木'; break;
      case '丁': rtn = '木'; break;
      case '戊': rtn = '火'; break;
      case '己': rtn = '火'; break;
      case '庚': rtn = '土'; break;
      case '辛': rtn = '土'; break;
      case '壬': rtn = '金'; break;
      case '癸': rtn = '金'; break;
    }
  }
  else {  /// 食或者财 
    //// 有官，财，用食伤
    /// 有官，食伤， 用财
    /// 无官，有财，用食伤
    /// 无官，无财，用财

    //// 无财用财，有财用食伤
    let haveCai = false;
    if( shenDayDz.value == '财' || shenMonthTg.value == '财' || shenMonthDz.value == '财' || shenYearTg.value == '财' || shenYearDz.value == '财' || shenHourTg.value == '财' || shenHourDz.value == '财' ) {
      haveCai = true;
    }
    if( shenDayDz.value == '才' || shenMonthTg.value == '才' || shenMonthDz.value == '才' || shenYearTg.value == '才' || shenYearDz.value == '才' || shenHourTg.value == '才' || shenHourDz.value == '才' ) {
      haveCai = true;
    }
    if( haveCai == true ) {
      switch(dayTg.value) {
        case '甲': rtn = '火'; break;
        case '乙': rtn = '火'; break;
        case '丙': rtn = '土'; break;
        case '丁': rtn = '土'; break;
        case '戊': rtn = '金'; break;
        case '己': rtn = '金'; break;
        case '庚': rtn = '水'; break;
        case '辛': rtn = '水'; break;
        case '壬': rtn = '木'; break;
        case '癸': rtn = '木'; break;
      }
    }
    else {
      switch(dayTg.value) {
        case '甲': rtn = '土'; break;
        case '乙': rtn = '土'; break;
        case '丙': rtn = '金'; break;
        case '丁': rtn = '金'; break;
        case '戊': rtn = '水'; break;
        case '己': rtn = '水'; break;
        case '庚': rtn = '木'; break;
        case '辛': rtn = '木'; break;
        case '壬': rtn = '火'; break;
        case '癸': rtn = '火'; break;
      }
    }

  }

  return rtn;
}
const fnWuHelp = (wx) => { ////根据喜用建议一些帮扶操作。 
  let rtn = '喜用不明。';
  
  if( wx == '金') {
    rtn = '选择西方位，选择白色或黄色，可佩戴金银，可有帮助。'
  }
  if( wx == '木') {
    rtn = '选择东方位，选择绿色，可佩木属性的手串，首饰，可有帮助。'
  }
  if( wx == '水') {
    rtn = '选择北方位，选择黑色，环境上养个金鱼，可有帮助。'
  }
  if( wx == '火') {
    rtn = '选择南方位，选择红色，可有帮助。'
  }
  if( wx == '土') {
    rtn = '选择中间方位，选择棕色，可佩戴玉石类首饰，可有帮助。'
  }

  return rtn;
}

const fnZiPingInfo = () => {
  if( boolSex.value == true ) {
    zpInfo.value = '坤命（女）：';
  }
  else {
    zpInfo.value = '乾命（男）：';
  }
  fnZiPingDuoGuan();  
  fnZiPingDuoBi();
  fnZiPingDuoYin();
  fnZiPingDuoCai();
  fnZiPingDuoShi();
}

const fnZiPingDuoGuan = () => { /// 多官
  let guan = 0;
  if( shenDayDz.value == '官' || shenDayDz.value == '煞' ) {
    guan = guan + 1;
  }
  if( shenMonthTg.value == '官' || shenMonthTg.value == '煞' ) {
    guan = guan + 1;
  }
  if( shenMonthDz.value == '官' || shenMonthDz.value == '煞' ) {
    guan = guan + 1;
  }
  if( shenYearTg.value == '官' || shenYearTg.value == '煞' ) {
    guan = guan + 1;
  }
  if( shenYearDz.value == '官' || shenYearDz.value == '煞' ) {
    guan = guan + 1;
  }
  if( shenHourTg.value == '官' || shenHourTg.value == '煞' ) {
    guan = guan + 1;
  }
  if( shenHourDz.value == '官' || shenHourDz.value == '煞' ) {
    guan = guan + 1;
  }
  if( boolSex.value == true ) {
    if( guan >= 2 ) {
      zpInfo.value = zpInfo.value + '多次婚姻或者多个男友的可能性大。';
    }
    if( guan == 0 ) {
      zpInfo.value = zpInfo.value + '不易成婚。';
    }
  }
  else {
    if( guan >= 2 ) {
      zpInfo.value = zpInfo.value + '工作辛苦，压力大。可以有多个儿女。';
    }
  }
}
const fnZiPingDuoBi = () => { /// 多比
  let guan = 0;
  if( shenDayDz.value == '比' || shenDayDz.value == '劫' ) {
    guan = guan + 1;
  }
  if( shenMonthTg.value == '比' || shenMonthTg.value == '劫' ) {
    guan = guan + 1;
  }
  if( shenMonthDz.value == '比' || shenMonthDz.value == '劫' ) {
    guan = guan + 1;
  }
  if( shenYearTg.value == '比' || shenYearTg.value == '劫' ) {
    guan = guan + 1;
  }
  if( shenYearDz.value == '比' || shenYearDz.value == '劫' ) {
    guan = guan + 1;
  }
  if( shenHourTg.value == '比' || shenHourTg.value == '劫' ) {
    guan = guan + 1;
  }
  if( shenHourDz.value == '比' || shenHourDz.value == '劫' ) {
    guan = guan + 1;
  }
  if( guan >= 2 ) {
    zpInfo.value = zpInfo.value + '性格要强，会努力拼搏。';
  }
}
const fnZiPingDuoYin = () => { /// 多印 
  let guan = 0;
  if( shenDayDz.value == '印' || shenDayDz.value == '枭' ) {
    guan = guan + 1;
  }
  if( shenMonthTg.value == '印' || shenMonthTg.value == '枭' ) {
    guan = guan + 1;
  }
  if( shenMonthDz.value == '印' || shenMonthDz.value == '枭' ) {
    guan = guan + 1;
  }
  if( shenYearTg.value == '印' || shenYearTg.value == '枭' ) {
    guan = guan + 1;
  }
  if( shenYearDz.value == '印' || shenYearDz.value == '枭' ) {
    guan = guan + 1;
  }
  if( shenHourTg.value == '印' || shenHourTg.value == '枭' ) {
    guan = guan + 1;
  }
  if( shenHourDz.value == '印' || shenHourDz.value == '枭' ) {
    guan = guan + 1;
  }
  if( guan >= 2 ) {
    zpInfo.value = zpInfo.value + '有贵人相帮。';
  }

}
const fnZiPingDuoCai = () => { /// 多财 
  let guan = 0;
  if( shenDayDz.value == '财' || shenDayDz.value == '才' ) {
    guan = guan + 1;
  }
  if( shenMonthTg.value == '财' || shenMonthTg.value == '才' ) {
    guan = guan + 1;
  }
  if( shenMonthDz.value == '财' || shenMonthDz.value == '才' ) {
    guan = guan + 1;
  }
  if( shenYearTg.value == '财' || shenYearTg.value == '才' ) {
    guan = guan + 1;
  }
  if( shenYearDz.value == '财' || shenYearDz.value == '才' ) {
    guan = guan + 1;
  }
  if( shenHourTg.value == '财' || shenHourTg.value == '才' ) {
    guan = guan + 1;
  }
  if( shenHourDz.value == '财' || shenHourDz.value == '才' ) {
    guan = guan + 1;
  }
  if( boolSex.value == false ) {
    if( guan >= 2 ) {
      zpInfo.value = zpInfo.value + '多次婚姻或者多个女友的可能性大。';
    }
    if( guan == 0 ) {
      zpInfo.value = zpInfo.value + '不易成婚。';
    }
  }
}
const fnZiPingDuoShi = () => { /// 多食伤
  let shi = 0, shang = 0;
  if( shenDayDz.value == '食' ) {
    shi = shi + 1;
  }
  if( shenMonthTg.value == '食' ) {
    shi = shi + 1;
  }
  if( shenMonthDz.value == '食' ) {
    shi = shi + 1;
  }
  if( shenYearTg.value == '食' ) {
    shi = shi + 1;
  }
  if( shenYearDz.value == '食' ) {
    shi = shi + 1;
  }
  if( shenHourTg.value == '食' ) {
    shi = shi + 1;
  }
  if( shenHourDz.value == '食' ) {
    shi = shi + 1;
  }
  if( shenDayDz.value == '伤' ) {
    shang = shang + 1;
  }
  if( shenMonthTg.value == '伤' ) {
    shang = shang + 1;
  }
  if( shenMonthDz.value == '伤' ) {
    shang = shang + 1;
  }
  if( shenYearTg.value == '伤' ) {
    shang = shang + 1;
  }
  if( shenYearDz.value == '伤' ) {
    shang = shang + 1;
  }
  if( shenHourTg.value == '伤' ) {
    shang = shang + 1;
  }
  if( shenHourDz.value == '伤' ) {
    shang = shang + 1;
  }
  if( boolSex.value == true ) {
    if( (shi + shang) >= 2 ) {
      zpInfo.value = zpInfo.value + '口才好，表达能力强，有多个儿女。';
    }
    if( shang >= 1 ) {
      zpInfo.value = zpInfo.value + '在家里做主。';
    }
  }
  else {
    if( (shi + shang) >= 1 ) {
      zpInfo.value = zpInfo.value + '口才好，表达能力强。';
    }
  }
}

//#endregion

const fnGetHeChong = (yearGan, yearZhi, 
  monthGan, monthZhi,
  dayGan, dayZhi,
  hourGan, hourZhi,
  bigGan, bigZhi,
  liuGan, liuZhi
) => {

  var uuu = {};
    uuu.appid = window.wxAppid;
    uuu.openid = window.wxOpenid;
    uuu.yearGan = yearGan;
    uuu.yearZhi = yearZhi;
    uuu.monthGan = monthGan;
    uuu.monthZhi = monthZhi;
    uuu.dayGan = dayGan;
    uuu.dayZhi = dayZhi;
    uuu.hourGan = hourGan;
    uuu.hourZhi = hourZhi;
    uuu.bigGan = bigGan;
    uuu.bigZhi = bigZhi;
    uuu.liuGan = liuGan;
    uuu.liuZhi = liuZhi;

    axios.post(curUrl.value + "/api/user/wxmp/hechong",
      uuu
    ).then((res) => {
      const oo = res.data;
      if( oo.code == 1000) {
          var dd = JSON.parse(oo.result);
          textHeChong.value = dd;
      }
      else {
          ElMessage(oo.msg);
      }
    }).catch(err => {
      console.log(err)
      ElMessage('未知错误');
    });

}


const fnBrowseFeworld = () => {
  //// 访问 /api/user/browse/feworld  获取用户浏览记录
  axios.get(curUrl.value + "/api/user/browse/feworld"
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
            var dd = JSON.parse(oo.result);
            paipanKey = dd.key;
        }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });
}

const fnAnalysisSelf = () => {

    var bazi = fnMakeBazi( bzYear.value + '-' + bzMonth.value + '-' + bzDay.value + ' ' +  bzHour.value + ':30:20' , boolSex.value?'女':'男' );

    var uuu = {};
    uuu.appid = window.wxAppid;
    uuu.openid = window.wxOpenid;
    uuu.paipan = JSON.stringify(bazi);

    axios.post(curUrl.value + "/api/user/wxmp/free",
      uuu
    ).then((res) => {
      const oo = res.data;
      if( oo.code == 1000) {
          var dd = JSON.parse(oo.result);
          textZiPing.value = dd;
      }
      else {
          ElMessage(oo.msg);
      }
    }).catch(err => {
      console.log(err)
      ElMessage('未知错误');
    });
    
}

const fnUserRunAnalysis = () => {
  //// 访问 /api/user/browse/feworld  获取用户浏览记录
  let sex = boolSex.value?'女':'男';
  let birth = bzYear.value + '-' + bzMonth.value + '-' + bzDay.value + '_' +  bzHour.value;
  axios.get(curUrl.value + '/api/user/run/analysis?key=' + sex + '_' + birth    
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
        }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });
}


const fnPay = () => {

  if( fnIsWeChat() == false ) {
    ElMessage('请在微信内部打开！');
    return;
  }

  if( window.wxOpenid == '' ) {
    ElMessage('微信id为空！请重新登录，https://www.ddfj0.cn/bz/');
    return;
  }

  if( nickName.value == '' ) {
    //nickName.value = '匿名';
    nickName.value = '1';
  }

  var uuu = {};
  uuu.appid = window.wxAppid;
  uuu.openid = window.wxOpenid;
  uuu.nick_name = nickName.value;
  uuu.birthday = bzYear.value + '-' + bzMonth.value + '-' + bzDay.value + ' ' +  bzHour.value + ':' + bzMinute.value + ':' + bzSecond.value;
  uuu.sex = boolSex.value?'女':'男';
  
  let bazi = fnMakeBazi(uuu.birthday, uuu.sex)
  uuu.paipan = JSON.stringify(bazi);

    axios.post(curUrl.value + "/api/user/wxmp/payinfo",
      uuu
    ).then((res) => {
      const oo = res.data;
      if( oo.code == 1000) {
          var dd = JSON.parse(oo.result);

          if( dd == null || dd == '' ) {
            ElMessage('拉取支付失败！');
            return;
          }
          //console.info(dd);

          wx.config({
            debug: false,
            appId: window.wxAppid,
            timestamp: dd.timeStamp,
            nonceStr: dd.nonceStr,
            signature: dd.paySign,
            jsApiList: ['chooseWXPay']
          });

          var bPayOk = false;
          /// 支付
          wx.chooseWXPay
          (
            {
              appId: window.wxAppid,
              timestamp: dd.timeStamp,
              nonceStr: dd.nonceStr,
              package: dd.package,
              signType: dd.signType,
              paySign: dd.paySign,
              success:function(res){
                bPayOk = true;
                ElMessage('支付成功, 非常感谢！');
                //ElMessage('支付成功, 请到《我的》里查看！');
                //router.push('analysis');
              },
              fail:function(res){
                bPayOk = true;
                ElMessage('支付失败：', res);
                fnCloseOrder(dd.orderNo);
              },
              cancel:function(res){
                bPayOk = true;
                ElMessage('支付取消：', res);
                fnCloseOrder(dd.orderNo);
              },
              complete:function(res){
                if( bPayOk == false ) {
                  fnCloseOrder(dd.orderNo);
                }
              }
            }
          );
      }
      else {
          ElMessage(oo.msg);
      }
    }).catch(err => {
      console.log(err)
      ElMessage('未知错误' + err);
    });

}

const fnCloseOrder = (orderNo) => {
  if( window.wxOpenid == '' ) {
    ElMessage('微信id为空！');
    return;
  }
  var uuu = {};
    uuu.appid = window.wxAppid;
    uuu.openid = window.wxOpenid;
    uuu.orderNo = orderNo;

    axios.post(curUrl.value + "/api/user/pay/mp/close",
      uuu
    ).then((res) => {
      const oo = res.data;
      if( oo.code == 1000) {
          ElMessage('关闭支付成功');
      }
      else {
          ElMessage(oo.msg);
      }
    }).catch(err => {
      console.log(err)
      ElMessage('未知错误' + err);
    });
}

const fnIsWeChat = () =>{
      //判断是否为微信内部登录
      var ua = window.navigator.userAgent.toLowerCase();
      //console.log(ua);
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;//是微信内部
      } else {
        return false;
      }
}

const fnGetWxCode = () => {
  /// 获取当前微信的code
  const local = encodeURIComponent( window.location.href);

  if( fnIsWeChat() == true ) {
    /// 获取当前页面的参数
    const urls = window.location.href.split('?');

    if( urls.length > 1 ) {
      const params = new URLSearchParams('?' + urls[1]);
      const codes = params.get('code').split('#');
      const code = codes[0];
      if( code == null || code == '' ) {
        ElMessage('获取code出错！');
      } else {
        wxCode.value = code;
        fnGetOpenid(code);
      }
    }
    else {
      const url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx95c349d43f1db2be&redirect_uri=' + local + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
      window.location.href = url;      
    }
  }
  else {
    ElMessage('请在微信中浏览本网页！');
  }


}

const fnGetOpenid = (code) => {

    var uuu = {};
    uuu.appid = appid.value;
    uuu.code = code;

    axios.post(curUrl.value + "/api/user/pay/mp/openid",
      uuu
    ).then((res) => {
      const oo = res.data;
      if( oo.code == 1000) {
          var dd = JSON.parse(oo.result);
          openid.value = dd.openid;
          ElMessage('获取openid成功');
      }
      else {
          ElMessage(oo.msg);
      }
    }).catch(err => {
      console.log(err)
      ElMessage('未知错误' + err);
    });

}

const fnPayListCopy = async () => {
    /// 遍历数组 textZiPing 里的字符串， 复制到剪贴板
    var str = '';

    for( var i = 0; i < textZiPing.value.length; i++ ) {
        str += textZiPing.value[i] + '\n';
    }

    const { toClipboard } = useClipboard();
    try {
        await toClipboard(str);  //实现复制
        ElMessage('复制成功');
    } catch (err) {
      ElMessage('复制失败 ' + err);
    }

    //navigator.clipboard.writeText(str).then(function() {
    //    ElMessage('复制成功');
    //}, function(err) {
    //    ElMessage('复制失败 ' + err);
    //});
}


</script>

<style scoped>
  .cornerbox { /* 定位div 边界，测试用 */
    color: transparent;
    position: relative;
    border-radius: 4px;
    border: 1px solid #f1f4f6;
    /* background: #25292c; */
  }

  .v-container { /* 替换默认设置 */
    max-width: calc(100vw - 6px);
  }  
  
  .main_area {
      /* margin: 86px 0px 0px 106px; !important; */
      border-radius: 4px; 
      border: 1px solid #424f57; 
      background: black;
      position: absolute; 
      /*overflow: hidden; */

      top: 85px;
      left: 2px;
      /* width: calc(100vw - 6px); */
      height: calc(100vh - 90px) !important;
      
    }

  .car_sys {
    overflow: hidden;
    height: calc(100vh - 92px);
    background: #212121;
    border-radius: 4px;
    z-index: 1;
    color: #000;
  }

  .bottom_bar {
        /* height: 600px; */
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        z-index: 200;
        background: rgba(79, 87, 96, 0.8);
        color: white;
  }

  .right_bar {
        position: absolute;
        right: 0;
        bottom: 0;
        height: calc(100vh - 144px);
        width: 400px;
        overflow: hidden;
        z-index: 20;
        background: rgba(30, 30, 30, 0.6);
        color: white;
  }

  .graphContainer {
    position: absolute; 
    z-index: 1; 
    left: 0px; 
    top: 52px; 
    width: calc(100vw - 6px); 
    height: calc(100vh - 144px);
    background: transparent;
    border: 1px solid #f1f4f6;
  }

  .el-table {
    --el-table-row-hover-bg-color: #424f57;
    --el-table-current-row-bg-color: #424f57;
    /*  --el-table-border-color: #424f57; */
  }

  .amap-info-content {
    background: rgba(10, 31, 67, 1.00);
  }

  .middle-left .amap-info-sharp {
    border-right: 8px solid rgba(10, 31, 67, 1.00);
  }

  .markerlnglat {
    img {
      width: 40px;
    }
  }

  .infoTitle {
    margin-left: 20px;
    margin-right: 20px;
  }

  .amap-ranging-label span {
    color: #000;
  }

  .v-text-field.v-text-field--solo .v-input__control{
      min-height: 10px;
  }
  .v-label{
    font-size: 10px;
  }
  .v-list-item-title {
    font-size: 10px;
  }

  .borderd {
    border: 1px solid #f1f4f6;
    overflow: auto;
  }

</style>