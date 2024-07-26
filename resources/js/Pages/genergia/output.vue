<script>
import { Link, Head } from "@inertiajs/vue3";
import getChartColorsArray from "@/common/getChartColorsArray";
import { layoutComputed } from "@/state/helpers.js";
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
      date: "2022-01-01 to 2022-01-31",
      config: {
        mode: "range",
      },
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        labels: ["Direct", "Social", "Email", "Other", "Referrals"],
        chart: {
          height: 333,
          type: "donut",
        },
        legend: {
          position: "bottom",
        },
        stroke: {
          show: false,
        },
        dataLabels: {
          dropShadow: {
            enabled: false,
          },
        },
      },
      Autoplay,
      Mousewheel,
    };
  },
  methods: {
    // rightcolumn() {
    //   if (document.querySelector('.layout-rightside-col').classList.contains('d-block')) {
    //     document.querySelector('.layout-rightside-col').classList.remove('d-block');
    //     document.querySelector('.layout-rightside-col').classList.add('d-none');
    //   } else {
    //     document.querySelector('.layout-rightside-col').classList.remove('d-none');
    //     document.querySelector('.layout-rightside-col').classList.add('d-block');
    //   }
    // },

    // resizerightcolumn() {
    //   const element = document.querySelector('.layout-rightside-col');

    //   if (element) {
    //     if (window.outerWidth < 1699) {
    //       element.classList.remove("d-block");
    //       element.classList.add("d-none");
    //     } else {
    //       element.classList.add("d-block");
    //       element.classList.remove("d-none");
    //     }
    //   }

    //   if (document.documentElement.getAttribute("data-layout") === "semibox") {
    //     element.classList.remove("d-block");
    //     element.classList.add("d-none");
    //   }
    // },

    // hiderightcolumn() {
    //   const element = document.querySelector('.layout-rightside-col');
    //   if (element.classList.contains('d-block')) {
    //     element.classList.remove("d-block");
    //     element.classList.add("d-none");
    //   }
    // },
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
    <Head title="Output" />
    <BRow>
      <BCol>
        <div class="h-100">
          <BRow class="mb-3 pb-1">
            <BCol cols="12">
              <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                <div class="flex-grow-1">
                  <h4 class="fs-16 mb-1 ri-sun-cloudy-line">METEO</h4>
                </div>
              </div>
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
                            >Simulation length [N years]</label
                          >
                        </BCol>
                        <BCol lg="1">
                          <BFormInput
                            type="text"
                            class="form-control"
                            id="simulationlegth"
                          />
                        </BCol>
                        <BCol lg="3">
                          <p>Value must be >=1</p>
                        </BCol>
                      </BRow>
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Tiem-step [-]:</label
                          >
                        </BCol>
                        <BCol lg="1">
                          <BFormInput
                            type="text"
                            class="form-control"
                            id="timestep"
                            placeholder=" 15 Min"
                            readonly
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
                <CardHeader title="Meteo file" />

                <BCardBody>
                  <p class="text-muted">
                    Expected file length: 35040 intervals (1 year)
                  </p>
                  <div class="live-preview">
                    <BForm action="javascript:void(0);">
                      <BRow class="mb-6">
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