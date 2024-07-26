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
    return {};
  },
  methods: {
    ...geenergiaMethods,
    updatePvSelectedModule(event) {
      this.changepvModuleSelected(event);
    },
    updateInverterSelected(event) {
      this.changeinvertedSelected(event);
    },

    updateTrackingStrategySelected(event) {
      this.changetrackingStrategySelected(event);
    },
    updateShadingModeSelected(event) {
      this.changeshadingModelSelected(event);
    },
    updateDegradationYear(event) {
      this.changedegradationYear(event);
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
    //GEENERGIA STORE
    ...geenergiaComputed,
    // simulationLength() {
    //   console.log(this.$store.state.geenergia.simulationLength)
    //     return this.$store ? this.$store.state.geenergia.simulationLength : {} || {};

    // },

    //-----------------------------------------------------------------------

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
    <Head title="PV System" />
    <BRow>
      <BCol>
        <div class="h-100">
          <BRow class="mb-3 pb-1">
            <BCol cols="12">
              <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                <div class="flex-grow-1">
                  <h4 class="fs-16 mb-1 ri-voice-recognition-line">
                    PV SYSTEM
                  </h4>
                </div>
              </div>
            </BCol>
          </BRow>

          <BRow>
            <BCol xxl="12">
              <BCard no-body>
                <CardHeader title="Equipment" />

                <BCardBody>
                  <div class="live-preview">
                    <BForm action="javascript:void(0);">
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >PV Module:
                          </label>
                        </BCol>
                        <BCol lg="3">
                          <BFormSelect
                            v-model="pvModuleSelected"
                            class="mb-3"
                            aria-label="Default select example"
                            @input="updatePvSelectedModule"
                          >
                            <BFormSelectOption value="0"
                              >Select PV Module</BFormSelectOption
                            >
                            <BFormSelectOption value="1"
                              >Module 1</BFormSelectOption
                            >
                            <BFormSelectOption value="2"
                              >Module 2</BFormSelectOption
                            >
                            <BFormSelectOption value="3"
                              >Module 3</BFormSelectOption
                            >
                          </BFormSelect>
                        </BCol>
                      </BRow>
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Inverter:
                          </label>
                        </BCol>
                        <BCol lg="3">
                          <BFormSelect
                            v-model="inverterSelected"
                            class="mb-3"
                            aria-label="Default select example"
                            @input="updateInverterSelected"
                          >
                            <BFormSelectOption value="0"
                              >Select Inverter</BFormSelectOption
                            >
                            <BFormSelectOption value="1"
                              >Inverter 1</BFormSelectOption
                            >
                            <BFormSelectOption value="2"
                              >Inverter 2</BFormSelectOption
                            >
                            <BFormSelectOption value="3"
                              >Inverter 3</BFormSelectOption
                            >
                          </BFormSelect>
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
                <CardHeader title="Simulation settings" />

                <BCardBody>
                  <div class="live-preview">
                    <BForm action="javascript:void(0);">
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Tracking strategy:
                          </label>
                        </BCol>
                        <BCol lg="3">
                          <BFormSelect
                            v-model="trackingStrategySelected"
                            class="mb-3"
                            aria-label="Default select example"
                            @input="updateTrackingStrategySelected"
                          >
                          <BFormSelectOption value="0"
                              >Select Tracking Strategy</BFormSelectOption
                            >
                            <BFormSelectOption value="1"
                              >Back-tracking</BFormSelectOption
                            >
                            <BFormSelectOption value="2"
                              >True-tracking</BFormSelectOption
                            >
                          </BFormSelect>
                        </BCol>
                      </BRow>
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Shading Model:
                          </label>
                        </BCol>
                        <BCol lg="3">
                          <BFormSelect
                            v-model="shadingModelSelected"
                            class="mb-3"
                            aria-label="Default select example"
                            @input="updateShadingModeSelected"
                          >
                           <BFormSelectOption value="0"
                              >Select Shading Mode</BFormSelectOption
                            >

                            <BFormSelectOption value="1"
                              >Linear Shadings 1</BFormSelectOption
                            >
                            <BFormSelectOption value="2"
                              >Acording to Strings Shadings 2</BFormSelectOption
                            >
                          </BFormSelect>
                        </BCol>
                      </BRow>
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Degradation year:</label
                          >
                        </BCol>
                        <BCol lg="1">
                          <BFormInput
                            type="text"
                            class="form-control"
                            id="degradationyear"
                            v-model="degradationYear"
                            @input="updateDegradationYear"
                          />
                        </BCol>
                        <BCol lg="3">
                          <p>
                            Value must be >=1. Applied to the first year of the
                            simulation
                          </p>
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