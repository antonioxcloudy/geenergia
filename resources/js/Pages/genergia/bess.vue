<script>
import { Link, Head } from "@inertiajs/vue3";
import getChartColorsArray from "@/common/getChartColorsArray";
import { layoutComputed } from "@/state/helpers.js";
import { geenergiaComputed } from "@/state/helpers.js";
import { geenergiaMethods } from "@/state/helpers.js";

import { CountTo } from "vue3-count-to";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "@/Layouts/main.vue";

import CardHeader from "@/common/card-header.vue";

export default {
  components: {
    CountTo,
    Layout,
    Swiper,
    SwiperSlide,
    flatPickr,
    Link,
    Head,
    CardHeader,
  },
  data() {
    return {
    
    };
  },
  methods: {
    
    ...geenergiaMethods,

    updateMaxCapacity(event) {
      this.changemaxCapacity(event);
    },
    updateInitialSoc(event) {
      this.changeinitialSoc(event);
    },

    updateDispatchStrategySelected(event) {
      this.changedispatchStrategySelected(event);
    },
    updateAuxiliaryLossesSelected(event) {
      this.changedauxiliarylossesSelected(event);
    },
   


    handleUpdate() {
      setTimeout(() => {
        switch (this.layoutTheme) {
          case "default":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "saas":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "corporate":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "galaxy":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
              ),
            };
            break;
          case "material":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "creative":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "minimal":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
              ),
            };
            break;
          case "modern":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "interactive":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
              ),
            };
            break;
          case "classic":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "vintage":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
        }
      }, 200);
    },
  },
  mounted() {
    // window.addEventListener("resize", this.resizerightcolumn);
    // this.handleUpdate();
  },
  computed: {

    ...geenergiaComputed,
    ...layoutComputed,
    layoutTheme() {
      return this.$store ? this.$store.state.layout.layoutTheme : {} || {};
    },
  },
  watch: {
    layoutTheme() {
      this.handleUpdate();
    },
  },
};
</script>

<template>
  <Layout>
    <Head title="BESS" />
    <BRow>
      <BCol>
        <div class="h-100">
          <BRow class="mb-3 pb-1">
            <BCol cols="12">
              <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                <div class="flex-grow-1">
                  <h4 class="fs-16 mb-1 ri-battery-2-charge-line">  BESS</h4>
                </div>
              </div>
            </BCol>
          </BRow>

          <BRow>
            <BCol xxl="12">
              <BCard no-body>
                <CardHeader title="Start conditions" />

                <BCardBody>
                  <div class="live-preview">
                    <BForm action="javascript:void(0);">
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                          >Initial Max. Capacity [%]:</label
                          >
                        </BCol>
                        <BCol lg="1">
                          <BFormInput
                          v-model="maxCapacity"
                          @input="changemaxCapacity"
                            type="text"
                            class="form-control"
                            id="maxcapacity"
                          />
                        </BCol>
                      
                      </BRow>
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Initial SOC [%]:</label
                          >
                        </BCol>
                        <BCol lg="1">
                          <BFormInput
                          v-model="initialSoc"
                          @input="changeinitialSoc"
                            type="text"
                            class="form-control"
                            id="timestep"
                           
                            
                          />
                        </BCol>
                      </BRow>
                    </BForm>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
          <BRow>
            <BCol xxl="12">
              <BCard no-body>
                <CardHeader title="Operation mode" />

                <BCardBody>
               
                  <div class="live-preview">
                    <BForm action="javascript:void(0);">
                        <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Dispatch strategy [%]:
                          </label>
                        </BCol>
                        <BCol lg="3">
                          <BFormSelect
                            v-model="dispatchStrategySelected"
                             @input="changedispatchStrategySelected"
                            class="mb-3"
                            aria-label="Default select example"
                          >
                          <BFormSelectOption value="0"
                              >Select Dispatch Strategy</BFormSelectOption
                            >
                            <BFormSelectOption value="1"
                              >Automatic</BFormSelectOption
                            >
                            <BFormSelectOption value="2"
                              >Time Series</BFormSelectOption
                            >
                          </BFormSelect>
                        </BCol>
                      </BRow>
                      <BRow class="mb-6">
                      <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >BESS Setpoints:
                          </label>
                      </BCol>
                        <BCol lg="6">
                          <div class="input-group">
                            <input
                              type="file"
                              class="form-control"
                              id="meteofile"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                              placeholder="No file selected"

                            />
                            <BButton
                              variant="outline-success"
                              type="button"
                              id="inputGroupFileAddon04"
                              >Import</BButton
                            >
                          </div>
                        </BCol>
                      </BRow>
                    </BForm>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
            <BRow>
            <BCol xxl="12">
              <BCard no-body>
                <CardHeader title="Auxiliary losses" />

                <BCardBody>
               
                  <div class="live-preview">
                    <BForm action="javascript:void(0);">
                        <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Select values from:
                          </label>
                        </BCol>
                        <BCol lg="3">
                          <BFormSelect
                            v-model="auxiliarylossesSelected"
                            class="mb-3"
                            aria-label="Default select example"
                            @input="changedauxiliarylossesSelected"
                          >
                           <BFormSelectOption value="0"
                              >Select Auxiliary Losses</BFormSelectOption
                            >
                            <BFormSelectOption value="1"
                              >Default</BFormSelectOption
                            >
                            <BFormSelectOption value="2"
                              >Time Series</BFormSelectOption
                            >
                             <BFormSelectOption value="2"
                              >No losses</BFormSelectOption
                            >
                          </BFormSelect>
                        </BCol>
                      </BRow>
                      <BRow class="mb-6">
                      <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >File Path:
                          </label>
                      </BCol>
                        <BCol lg="6">
                          <div class="input-group">
                            <input
                              type="file"
                              class="form-control"
                              id="meteofile"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                              placeholder="No file selected"

                            />
                            <BButton
                              variant="outline-success"
                              type="button"
                              id="inputGroupFileAddon04"
                              >Import</BButton
                            >
                          </div>
                        </BCol>
                      </BRow>
                    </BForm>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>