'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('qualityOfLife', [
      {
        "country": "Denmark",
        "qualityOfLifeIndex": 192.67,
        "purchasingPowerIndex": 100.88,
        "safetyIndex": 74.9,
        "healthCareIndex": 80,
        "costOfLivingIndex": 83,
        "propertyPriceToIncomeRatio": 7.45,
        "trafficCommuteTimeIndex": 28.85,
        "pollutionIndex": 21.33,
        "climateIndex": 81.8
      },
      {
        "country": "Switzerland",
        "qualityOfLifeIndex": 192.01,
        "purchasingPowerIndex": 119.53,
        "safetyIndex": 78.4,
        "healthCareIndex": 72.44,
        "costOfLivingIndex": 122.4,
        "propertyPriceToIncomeRatio": 8.68,
        "trafficCommuteTimeIndex": 29.09,
        "pollutionIndex": 22.39,
        "climateIndex": 79.24
      },
      {
        "country": "Finland",
        "qualityOfLifeIndex": 190.22,
        "purchasingPowerIndex": 99.93,
        "safetyIndex": 76.68,
        "healthCareIndex": 75.79,
        "costOfLivingIndex": 70.29,
        "propertyPriceToIncomeRatio": 8.35,
        "trafficCommuteTimeIndex": 29.9,
        "pollutionIndex": 11.55,
        "climateIndex": 58.87
      },
      {
        "country": "Australia",
        "qualityOfLifeIndex": 186.21,
        "purchasingPowerIndex": 107.31,
        "safetyIndex": 58.64,
        "healthCareIndex": 77.38,
        "costOfLivingIndex": 73.54,
        "propertyPriceToIncomeRatio": 7.52,
        "trafficCommuteTimeIndex": 34.73,
        "pollutionIndex": 23.46,
        "climateIndex": 92.7
      },
      {
        "country": "Netherlands",
        "qualityOfLifeIndex": 183.67,
        "purchasingPowerIndex": 90.73,
        "safetyIndex": 72.38,
        "healthCareIndex": 74.65,
        "costOfLivingIndex": 73.75,
        "propertyPriceToIncomeRatio": 7.51,
        "trafficCommuteTimeIndex": 29.43,
        "pollutionIndex": 27.41,
        "climateIndex": 87.61
      },
      {
        "country": "Austria",
        "qualityOfLifeIndex": 182.5,
        "purchasingPowerIndex": 82.38,
        "safetyIndex": 76.27,
        "healthCareIndex": 78.73,
        "costOfLivingIndex": 70.38,
        "propertyPriceToIncomeRatio": 10.88,
        "trafficCommuteTimeIndex": 26.27,
        "pollutionIndex": 22.19,
        "climateIndex": 77.3
      },
      {
        "country": "Iceland",
        "qualityOfLifeIndex": 181.75,
        "purchasingPowerIndex": 79.44,
        "safetyIndex": 76.64,
        "healthCareIndex": 65.92,
        "costOfLivingIndex": 100.48,
        "propertyPriceToIncomeRatio": 6.74,
        "trafficCommuteTimeIndex": 20.1,
        "pollutionIndex": 16.21,
        "climateIndex": 68.81
      },
      {
        "country": "New Zealand",
        "qualityOfLifeIndex": 181.02,
        "purchasingPowerIndex": 92.66,
        "safetyIndex": 59.07,
        "healthCareIndex": 73.81,
        "costOfLivingIndex": 72.53,
        "propertyPriceToIncomeRatio": 8.52,
        "trafficCommuteTimeIndex": 31.1,
        "pollutionIndex": 23.4,
        "climateIndex": 95.46
      },
      {
        "country": "Germany",
        "qualityOfLifeIndex": 179.78,
        "purchasingPowerIndex": 102.36,
        "safetyIndex": 65.19,
        "healthCareIndex": 73.32,
        "costOfLivingIndex": 65.26,
        "propertyPriceToIncomeRatio": 9.38,
        "trafficCommuteTimeIndex": 30.98,
        "pollutionIndex": 29.03,
        "climateIndex": 83
      },
      {
        "country": "Estonia",
        "qualityOfLifeIndex": 177.82,
        "purchasingPowerIndex": 71.3,
        "safetyIndex": 76.86,
        "healthCareIndex": 72.67,
        "costOfLivingIndex": 50.93,
        "propertyPriceToIncomeRatio": 9.06,
        "trafficCommuteTimeIndex": 24.53,
        "pollutionIndex": 19.81,
        "climateIndex": 64.28
      },
      {
        "country": "Sweden",
        "qualityOfLifeIndex": 175.95,
        "purchasingPowerIndex": 101.73,
        "safetyIndex": 52.93,
        "healthCareIndex": 69.23,
        "costOfLivingIndex": 69.85,
        "propertyPriceToIncomeRatio": 9.27,
        "trafficCommuteTimeIndex": 30.49,
        "pollutionIndex": 18.09,
        "climateIndex": 73.97
      },
      {
        "country": "Norway",
        "qualityOfLifeIndex": 175.19,
        "purchasingPowerIndex": 88.38,
        "safetyIndex": 64.57,
        "healthCareIndex": 74.36,
        "costOfLivingIndex": 101.43,
        "propertyPriceToIncomeRatio": 8.77,
        "trafficCommuteTimeIndex": 26.99,
        "pollutionIndex": 20.35,
        "climateIndex": 71.37
      },
      {
        "country": "Slovenia",
        "qualityOfLifeIndex": 172.15,
        "purchasingPowerIndex": 66.31,
        "safetyIndex": 78.93,
        "healthCareIndex": 64.58,
        "costOfLivingIndex": 53.43,
        "propertyPriceToIncomeRatio": 10.49,
        "trafficCommuteTimeIndex": 27.3,
        "pollutionIndex": 24.06,
        "climateIndex": 77.56
      },
      {
        "country": "United States",
        "qualityOfLifeIndex": 172.11,
        "purchasingPowerIndex": 109.52,
        "safetyIndex": 52.8,
        "healthCareIndex": 69.27,
        "costOfLivingIndex": 71.05,
        "propertyPriceToIncomeRatio": 3.52,
        "trafficCommuteTimeIndex": 32.89,
        "pollutionIndex": 36.88,
        "climateIndex": 77.54
      },
      {
        "country": "Spain",
        "qualityOfLifeIndex": 169.82,
        "purchasingPowerIndex": 72.03,
        "safetyIndex": 68.04,
        "healthCareIndex": 78.88,
        "costOfLivingIndex": 53.77,
        "propertyPriceToIncomeRatio": 9.37,
        "trafficCommuteTimeIndex": 29.1,
        "pollutionIndex": 39.99,
        "climateIndex": 94.19
      },
      {
        "country": "Japan",
        "qualityOfLifeIndex": 167.99,
        "purchasingPowerIndex": 87.28,
        "safetyIndex": 79.34,
        "healthCareIndex": 81.14,
        "costOfLivingIndex": 83.35,
        "propertyPriceToIncomeRatio": 13,
        "trafficCommuteTimeIndex": 39.15,
        "pollutionIndex": 39.59,
        "climateIndex": 84.79
      },
      {
        "country": "Oman",
        "qualityOfLifeIndex": 167.09,
        "purchasingPowerIndex": 80.97,
        "safetyIndex": 79.21,
        "healthCareIndex": 58.15,
        "costOfLivingIndex": 49.28,
        "propertyPriceToIncomeRatio": 9.08,
        "trafficCommuteTimeIndex": 22.8,
        "pollutionIndex": 37.74,
        "climateIndex": 67.22
      },
      {
        "country": "Canada",
        "qualityOfLifeIndex": 163.47,
        "purchasingPowerIndex": 95.09,
        "safetyIndex": 60.33,
        "healthCareIndex": 71.58,
        "costOfLivingIndex": 67.62,
        "propertyPriceToIncomeRatio": 7.97,
        "trafficCommuteTimeIndex": 33.87,
        "pollutionIndex": 27.83,
        "climateIndex": 50.57
      },
      {
        "country": "Portugal",
        "qualityOfLifeIndex": 162.91,
        "purchasingPowerIndex": 49.43,
        "safetyIndex": 70.37,
        "healthCareIndex": 71.88,
        "costOfLivingIndex": 49.52,
        "propertyPriceToIncomeRatio": 12.7,
        "trafficCommuteTimeIndex": 30,
        "pollutionIndex": 30.89,
        "climateIndex": 97.31
      },
      {
        "country": "United Kingdom",
        "qualityOfLifeIndex": 162.71,
        "purchasingPowerIndex": 91.73,
        "safetyIndex": 56.29,
        "healthCareIndex": 74.46,
        "costOfLivingIndex": 67.28,
        "propertyPriceToIncomeRatio": 10.09,
        "trafficCommuteTimeIndex": 34.53,
        "pollutionIndex": 40.56,
        "climateIndex": 87.62
      },
      {
        "country": "Qatar",
        "qualityOfLifeIndex": 162.29,
        "purchasingPowerIndex": 111.69,
        "safetyIndex": 88.14,
        "healthCareIndex": 73.3,
        "costOfLivingIndex": 64.04,
        "propertyPriceToIncomeRatio": 5.82,
        "trafficCommuteTimeIndex": 29.72,
        "pollutionIndex": 61.06,
        "climateIndex": 36.03
      },
      {
        "country": "Lithuania",
        "qualityOfLifeIndex": 159.42,
        "purchasingPowerIndex": 57.85,
        "safetyIndex": 66.94,
        "healthCareIndex": 69.49,
        "costOfLivingIndex": 44.28,
        "propertyPriceToIncomeRatio": 10.9,
        "trafficCommuteTimeIndex": 26.08,
        "pollutionIndex": 28.8,
        "climateIndex": 67.76
      },
      {
        "country": "Croatia",
        "qualityOfLifeIndex": 159.01,
        "purchasingPowerIndex": 50.42,
        "safetyIndex": 75.29,
        "healthCareIndex": 62.68,
        "costOfLivingIndex": 49.7,
        "propertyPriceToIncomeRatio": 13.73,
        "trafficCommuteTimeIndex": 29.11,
        "pollutionIndex": 30.46,
        "climateIndex": 89.05
      },
      {
        "country": "United Arab Emirates",
        "qualityOfLifeIndex": 156.67,
        "purchasingPowerIndex": 91.58,
        "safetyIndex": 84.3,
        "healthCareIndex": 67.04,
        "costOfLivingIndex": 61.98,
        "propertyPriceToIncomeRatio": 5.29,
        "trafficCommuteTimeIndex": 36.85,
        "pollutionIndex": 51.15,
        "climateIndex": 45.23
      },
      {
        "country": "Czech Republic",
        "qualityOfLifeIndex": 156.24,
        "purchasingPowerIndex": 62.82,
        "safetyIndex": 74.48,
        "healthCareIndex": 74.62,
        "costOfLivingIndex": 46.15,
        "propertyPriceToIncomeRatio": 15.42,
        "trafficCommuteTimeIndex": 29.65,
        "pollutionIndex": 40.23,
        "climateIndex": 77.13
      },
      {
        "country": "France",
        "qualityOfLifeIndex": 153.95,
        "purchasingPowerIndex": 80.36,
        "safetyIndex": 53.21,
        "healthCareIndex": 79.99,
        "costOfLivingIndex": 74.14,
        "propertyPriceToIncomeRatio": 13.04,
        "trafficCommuteTimeIndex": 34.76,
        "pollutionIndex": 43.56,
        "climateIndex": 90.25
      },
      {
        "country": "Ireland",
        "qualityOfLifeIndex": 153.53,
        "purchasingPowerIndex": 80.88,
        "safetyIndex": 54.57,
        "healthCareIndex": 51.89,
        "costOfLivingIndex": 75.91,
        "propertyPriceToIncomeRatio": 7.49,
        "trafficCommuteTimeIndex": 37.68,
        "pollutionIndex": 33.99,
        "climateIndex": 89.13
      },
      {
        "country": "Belgium",
        "qualityOfLifeIndex": 153.47,
        "purchasingPowerIndex": 86.28,
        "safetyIndex": 56.02,
        "healthCareIndex": 74.34,
        "costOfLivingIndex": 71.78,
        "propertyPriceToIncomeRatio": 6.91,
        "trafficCommuteTimeIndex": 36.15,
        "pollutionIndex": 52.94,
        "climateIndex": 85.99
      },
      {
        "country": "Slovakia",
        "qualityOfLifeIndex": 152.53,
        "purchasingPowerIndex": 56.94,
        "safetyIndex": 70.78,
        "healthCareIndex": 60.02,
        "costOfLivingIndex": 44.46,
        "propertyPriceToIncomeRatio": 10.25,
        "trafficCommuteTimeIndex": 29.11,
        "pollutionIndex": 39.66,
        "climateIndex": 78.13
      },
      {
        "country": "Saudi Arabia",
        "qualityOfLifeIndex": 150.56,
        "purchasingPowerIndex": 100,
        "safetyIndex": 73.82,
        "healthCareIndex": 59.11,
        "costOfLivingIndex": 48.34,
        "propertyPriceToIncomeRatio": 2.79,
        "trafficCommuteTimeIndex": 28.61,
        "pollutionIndex": 65.09,
        "climateIndex": 45.98
      },
      {
        "country": "Latvia",
        "qualityOfLifeIndex": 150,
        "purchasingPowerIndex": 52.48,
        "safetyIndex": 63.05,
        "healthCareIndex": 62.91,
        "costOfLivingIndex": 47.94,
        "propertyPriceToIncomeRatio": 8.85,
        "trafficCommuteTimeIndex": 32.89,
        "pollutionIndex": 33.73,
        "climateIndex": 74.7
      },
      {
        "country": "Israel",
        "qualityOfLifeIndex": 149.94,
        "purchasingPowerIndex": 78.09,
        "safetyIndex": 70.4,
        "healthCareIndex": 73.29,
        "costOfLivingIndex": 81.15,
        "propertyPriceToIncomeRatio": 12.83,
        "trafficCommuteTimeIndex": 35.91,
        "pollutionIndex": 57.25,
        "climateIndex": 93.78
      },
      {
        "country": "Cyprus",
        "qualityOfLifeIndex": 147.93,
        "purchasingPowerIndex": 57.41,
        "safetyIndex": 69.99,
        "healthCareIndex": 51.75,
        "costOfLivingIndex": 57.93,
        "propertyPriceToIncomeRatio": 8.2,
        "trafficCommuteTimeIndex": 23.95,
        "pollutionIndex": 53.55,
        "climateIndex": 92.8
      },
      {
        "country": "Singapore",
        "qualityOfLifeIndex": 144.39,
        "purchasingPowerIndex": 88.96,
        "safetyIndex": 69.43,
        "healthCareIndex": 70.84,
        "costOfLivingIndex": 81.1,
        "propertyPriceToIncomeRatio": 22.31,
        "trafficCommuteTimeIndex": 41.31,
        "pollutionIndex": 33.48,
        "climateIndex": 57.45
      },
      {
        "country": "Taiwan",
        "qualityOfLifeIndex": 143.23,
        "purchasingPowerIndex": 65.67,
        "safetyIndex": 84.35,
        "healthCareIndex": 86.71,
        "costOfLivingIndex": 61.37,
        "propertyPriceToIncomeRatio": 23.69,
        "trafficCommuteTimeIndex": 31.93,
        "pollutionIndex": 63.35,
        "climateIndex": 84.38
      },
      {
        "country": "Poland",
        "qualityOfLifeIndex": 141.83,
        "purchasingPowerIndex": 59.61,
        "safetyIndex": 71.5,
        "healthCareIndex": 61.01,
        "costOfLivingIndex": 40.04,
        "propertyPriceToIncomeRatio": 11.38,
        "trafficCommuteTimeIndex": 31.72,
        "pollutionIndex": 54.46,
        "climateIndex": 76.14
      },
      {
        "country": "Italy",
        "qualityOfLifeIndex": 140.76,
        "purchasingPowerIndex": 65.59,
        "safetyIndex": 55.74,
        "healthCareIndex": 66.59,
        "costOfLivingIndex": 67.26,
        "propertyPriceToIncomeRatio": 9.71,
        "trafficCommuteTimeIndex": 34.42,
        "pollutionIndex": 55.63,
        "climateIndex": 92.27
      },
      {
        "country": "South Korea",
        "qualityOfLifeIndex": 139.02,
        "purchasingPowerIndex": 85.21,
        "safetyIndex": 71.98,
        "healthCareIndex": 81.97,
        "costOfLivingIndex": 78.18,
        "propertyPriceToIncomeRatio": 17.37,
        "trafficCommuteTimeIndex": 39.57,
        "pollutionIndex": 62.48,
        "climateIndex": 68.39
      },
      {
        "country": "Belarus",
        "qualityOfLifeIndex": 134.83,
        "purchasingPowerIndex": 37,
        "safetyIndex": 75.01,
        "healthCareIndex": 59.04,
        "costOfLivingIndex": 34.7,
        "propertyPriceToIncomeRatio": 14.65,
        "trafficCommuteTimeIndex": 30.68,
        "pollutionIndex": 43.63,
        "climateIndex": 64.37
      },
      {
        "country": "Greece",
        "qualityOfLifeIndex": 133.07,
        "purchasingPowerIndex": 43.68,
        "safetyIndex": 59.68,
        "healthCareIndex": 56.21,
        "costOfLivingIndex": 55.67,
        "propertyPriceToIncomeRatio": 10.6,
        "trafficCommuteTimeIndex": 33.84,
        "pollutionIndex": 52.55,
        "climateIndex": 94.18
      },
      {
        "country": "Romania",
        "qualityOfLifeIndex": 132.44,
        "purchasingPowerIndex": 48.86,
        "safetyIndex": 72.36,
        "healthCareIndex": 55.06,
        "costOfLivingIndex": 35.31,
        "propertyPriceToIncomeRatio": 11.33,
        "trafficCommuteTimeIndex": 34.75,
        "pollutionIndex": 58.42,
        "climateIndex": 77.62
      },
      {
        "country": "South Africa",
        "qualityOfLifeIndex": 131.97,
        "purchasingPowerIndex": 73.61,
        "safetyIndex": 22.51,
        "healthCareIndex": 64.14,
        "costOfLivingIndex": 42.87,
        "propertyPriceToIncomeRatio": 3.93,
        "trafficCommuteTimeIndex": 39.43,
        "pollutionIndex": 57.3,
        "climateIndex": 95.25
      },
      {
        "country": "Bulgaria",
        "qualityOfLifeIndex": 129.8,
        "purchasingPowerIndex": 49.37,
        "safetyIndex": 61.5,
        "healthCareIndex": 55.4,
        "costOfLivingIndex": 36.7,
        "propertyPriceToIncomeRatio": 8.52,
        "trafficCommuteTimeIndex": 29.39,
        "pollutionIndex": 65.33,
        "climateIndex": 82.76
      },
      {
        "country": "Hungary",
        "qualityOfLifeIndex": 128.16,
        "purchasingPowerIndex": 47.55,
        "safetyIndex": 64.92,
        "healthCareIndex": 47.8,
        "costOfLivingIndex": 40.85,
        "propertyPriceToIncomeRatio": 14.77,
        "trafficCommuteTimeIndex": 35.78,
        "pollutionIndex": 48.29,
        "climateIndex": 79.48
      },
      {
        "country": "Turkey",
        "qualityOfLifeIndex": 127.1,
        "purchasingPowerIndex": 40.85,
        "safetyIndex": 60.51,
        "healthCareIndex": 69.8,
        "costOfLivingIndex": 34.69,
        "propertyPriceToIncomeRatio": 7.81,
        "trafficCommuteTimeIndex": 44.65,
        "pollutionIndex": 67.35,
        "climateIndex": 93.26
      },
      {
        "country": "Uruguay",
        "qualityOfLifeIndex": 125.98,
        "purchasingPowerIndex": 37.46,
        "safetyIndex": 46.19,
        "healthCareIndex": 66.28,
        "costOfLivingIndex": 51.04,
        "propertyPriceToIncomeRatio": 16.34,
        "trafficCommuteTimeIndex": 39.89,
        "pollutionIndex": 44.84,
        "climateIndex": 98.04
      },
      {
        "country": "Ecuador",
        "qualityOfLifeIndex": 125.14,
        "purchasingPowerIndex": 36.08,
        "safetyIndex": 49.1,
        "healthCareIndex": 70.59,
        "costOfLivingIndex": 40.98,
        "propertyPriceToIncomeRatio": 12.7,
        "trafficCommuteTimeIndex": 37.55,
        "pollutionIndex": 57,
        "climateIndex": 94.51
      },
      {
        "country": "Bosnia And Herzegovina",
        "qualityOfLifeIndex": 121.89,
        "purchasingPowerIndex": 41.83,
        "safetyIndex": 56.97,
        "healthCareIndex": 52.26,
        "costOfLivingIndex": 35.97,
        "propertyPriceToIncomeRatio": 12.58,
        "trafficCommuteTimeIndex": 26.67,
        "pollutionIndex": 62.33,
        "climateIndex": 80.48
      },
      {
        "country": "Chile",
        "qualityOfLifeIndex": 119.76,
        "purchasingPowerIndex": 42.5,
        "safetyIndex": 54.77,
        "healthCareIndex": 65.44,
        "costOfLivingIndex": 43.62,
        "propertyPriceToIncomeRatio": 14.93,
        "trafficCommuteTimeIndex": 35.44,
        "pollutionIndex": 65.78,
        "climateIndex": 90.21
      },
      {
        "country": "Mexico",
        "qualityOfLifeIndex": 118.55,
        "purchasingPowerIndex": 41.81,
        "safetyIndex": 46.03,
        "healthCareIndex": 70.12,
        "costOfLivingIndex": 35.72,
        "propertyPriceToIncomeRatio": 10.67,
        "trafficCommuteTimeIndex": 39.39,
        "pollutionIndex": 66.1,
        "climateIndex": 86.29
      },
      {
        "country": "Malaysia",
        "qualityOfLifeIndex": 118.44,
        "purchasingPowerIndex": 64.49,
        "safetyIndex": 41.16,
        "healthCareIndex": 68.1,
        "costOfLivingIndex": 39.12,
        "propertyPriceToIncomeRatio": 9.94,
        "trafficCommuteTimeIndex": 37.03,
        "pollutionIndex": 63.18,
        "climateIndex": 57.92
      },
      {
        "country": "Serbia",
        "qualityOfLifeIndex": 116.3,
        "purchasingPowerIndex": 36.72,
        "safetyIndex": 62.59,
        "healthCareIndex": 51.27,
        "costOfLivingIndex": 35.72,
        "propertyPriceToIncomeRatio": 18.94,
        "trafficCommuteTimeIndex": 30.43,
        "pollutionIndex": 60.32,
        "climateIndex": 83.23
      },
      {
        "country": "Georgia",
        "qualityOfLifeIndex": 115.95,
        "purchasingPowerIndex": 24.88,
        "safetyIndex": 79.79,
        "healthCareIndex": 51.24,
        "costOfLivingIndex": 28.48,
        "propertyPriceToIncomeRatio": 14.21,
        "trafficCommuteTimeIndex": 36.02,
        "pollutionIndex": 71.09,
        "climateIndex": 84.2
      },
      {
        "country": "Kuwait",
        "qualityOfLifeIndex": 115.75,
        "purchasingPowerIndex": 85.59,
        "safetyIndex": 65.25,
        "healthCareIndex": 56.21,
        "costOfLivingIndex": 50.37,
        "propertyPriceToIncomeRatio": 12.28,
        "trafficCommuteTimeIndex": 34.44,
        "pollutionIndex": 68.69,
        "climateIndex": 20.22
      },
      {
        "country": "Argentina",
        "qualityOfLifeIndex": 115.31,
        "purchasingPowerIndex": 47.22,
        "safetyIndex": 38.23,
        "healthCareIndex": 69.25,
        "costOfLivingIndex": 32.95,
        "propertyPriceToIncomeRatio": 24.53,
        "trafficCommuteTimeIndex": 43.08,
        "pollutionIndex": 50.67,
        "climateIndex": 98.28
      },
      {
        "country": "Jordan",
        "qualityOfLifeIndex": 112.4,
        "purchasingPowerIndex": 34.88,
        "safetyIndex": 59.17,
        "healthCareIndex": 64.6,
        "costOfLivingIndex": 53.67,
        "propertyPriceToIncomeRatio": 8.42,
        "trafficCommuteTimeIndex": 42.03,
        "pollutionIndex": 77.78,
        "climateIndex": 89.05
      },
      {
        "country": "North Macedonia",
        "qualityOfLifeIndex": 110.46,
        "purchasingPowerIndex": 37.15,
        "safetyIndex": 61.33,
        "healthCareIndex": 56.38,
        "costOfLivingIndex": 31.59,
        "propertyPriceToIncomeRatio": 12.6,
        "trafficCommuteTimeIndex": 27.61,
        "pollutionIndex": 80.23,
        "climateIndex": 76.3
      },
      {
        "country": "India",
        "qualityOfLifeIndex": 108.63,
        "purchasingPowerIndex": 54.3,
        "safetyIndex": 56.68,
        "healthCareIndex": 67.13,
        "costOfLivingIndex": 24.58,
        "propertyPriceToIncomeRatio": 11.38,
        "trafficCommuteTimeIndex": 46.99,
        "pollutionIndex": 78.87,
        "climateIndex": 64.87
      },
      {
        "country": "Panama",
        "qualityOfLifeIndex": 108.36,
        "purchasingPowerIndex": 34.23,
        "safetyIndex": 52.81,
        "healthCareIndex": 59.93,
        "costOfLivingIndex": 54.16,
        "propertyPriceToIncomeRatio": 12.6,
        "trafficCommuteTimeIndex": 36.48,
        "pollutionIndex": 63.09,
        "climateIndex": 67.84
      },
      {
        "country": "Lebanon",
        "qualityOfLifeIndex": 106.56,
        "purchasingPowerIndex": 44.47,
        "safetyIndex": 56.64,
        "healthCareIndex": 64.38,
        "costOfLivingIndex": 60.5,
        "propertyPriceToIncomeRatio": 13.23,
        "trafficCommuteTimeIndex": 37.38,
        "pollutionIndex": 88.37,
        "climateIndex": 94.74
      },
      {
        "country": "Colombia",
        "qualityOfLifeIndex": 105.83,
        "purchasingPowerIndex": 31.12,
        "safetyIndex": 45.21,
        "healthCareIndex": 67.24,
        "costOfLivingIndex": 30.66,
        "propertyPriceToIncomeRatio": 19.65,
        "trafficCommuteTimeIndex": 47.49,
        "pollutionIndex": 62.83,
        "climateIndex": 96.69
      },
      {
        "country": "Brazil",
        "qualityOfLifeIndex": 105.65,
        "purchasingPowerIndex": 32.81,
        "safetyIndex": 31.12,
        "healthCareIndex": 56.29,
        "costOfLivingIndex": 40.22,
        "propertyPriceToIncomeRatio": 16.41,
        "trafficCommuteTimeIndex": 41.7,
        "pollutionIndex": 54.98,
        "climateIndex": 97.16
      },
      {
        "country": "Morocco",
        "qualityOfLifeIndex": 105.46,
        "purchasingPowerIndex": 35.25,
        "safetyIndex": 51.31,
        "healthCareIndex": 45.72,
        "costOfLivingIndex": 34.32,
        "propertyPriceToIncomeRatio": 14.18,
        "trafficCommuteTimeIndex": 36.89,
        "pollutionIndex": 70.64,
        "climateIndex": 91.7
      },
      {
        "country": "Pakistan",
        "qualityOfLifeIndex": 105.44,
        "purchasingPowerIndex": 30.57,
        "safetyIndex": 55.92,
        "healthCareIndex": 60.59,
        "costOfLivingIndex": 21.98,
        "propertyPriceToIncomeRatio": 11.98,
        "trafficCommuteTimeIndex": 38.56,
        "pollutionIndex": 74.25,
        "climateIndex": 71.93
      },
      {
        "country": "Ukraine",
        "qualityOfLifeIndex": 104.77,
        "purchasingPowerIndex": 31.8,
        "safetyIndex": 51.15,
        "healthCareIndex": 52.33,
        "costOfLivingIndex": 33.18,
        "propertyPriceToIncomeRatio": 12.23,
        "trafficCommuteTimeIndex": 38.65,
        "pollutionIndex": 65.08,
        "climateIndex": 71.42
      },
      {
        "country": "China",
        "qualityOfLifeIndex": 102.81,
        "purchasingPowerIndex": 60.88,
        "safetyIndex": 68.17,
        "healthCareIndex": 64.48,
        "costOfLivingIndex": 40.04,
        "propertyPriceToIncomeRatio": 29.06,
        "trafficCommuteTimeIndex": 41.81,
        "pollutionIndex": 80.77,
        "climateIndex": 79.19
      },
      {
        "country": "Russia",
        "qualityOfLifeIndex": 102.31,
        "purchasingPowerIndex": 38.94,
        "safetyIndex": 58.88,
        "healthCareIndex": 57.59,
        "costOfLivingIndex": 39.21,
        "propertyPriceToIncomeRatio": 10.77,
        "trafficCommuteTimeIndex": 45.3,
        "pollutionIndex": 62.79,
        "climateIndex": 40.36
      },
      {
        "country": "Thailand",
        "qualityOfLifeIndex": 101.88,
        "purchasingPowerIndex": 35.45,
        "safetyIndex": 59.52,
        "healthCareIndex": 77.95,
        "costOfLivingIndex": 49.77,
        "propertyPriceToIncomeRatio": 22.26,
        "trafficCommuteTimeIndex": 38.23,
        "pollutionIndex": 75.07,
        "climateIndex": 69.45
      },
      {
        "country": "Hong Kong",
        "qualityOfLifeIndex": 99.05,
        "purchasingPowerIndex": 65.32,
        "safetyIndex": 79.3,
        "healthCareIndex": 66.08,
        "costOfLivingIndex": 77.22,
        "propertyPriceToIncomeRatio": 47.46,
        "trafficCommuteTimeIndex": 41.46,
        "pollutionIndex": 67.69,
        "climateIndex": 83.64
      },
      {
        "country": "Indonesia",
        "qualityOfLifeIndex": 97.47,
        "purchasingPowerIndex": 25.05,
        "safetyIndex": 54.16,
        "healthCareIndex": 60.48,
        "costOfLivingIndex": 37.27,
        "propertyPriceToIncomeRatio": 18.88,
        "trafficCommuteTimeIndex": 43.11,
        "pollutionIndex": 66.56,
        "climateIndex": 74.15
      },
      {
        "country": "Kazakhstan",
        "qualityOfLifeIndex": 88.31,
        "purchasingPowerIndex": 38.36,
        "safetyIndex": 37.98,
        "healthCareIndex": 50.7,
        "costOfLivingIndex": 30.64,
        "propertyPriceToIncomeRatio": 10.86,
        "trafficCommuteTimeIndex": 31.08,
        "pollutionIndex": 75.15,
        "climateIndex": 39.78
      },
      {
        "country": "Vietnam",
        "qualityOfLifeIndex": 87.48,
        "purchasingPowerIndex": 28.14,
        "safetyIndex": 54.65,
        "healthCareIndex": 57.7,
        "costOfLivingIndex": 38.34,
        "propertyPriceToIncomeRatio": 21.36,
        "trafficCommuteTimeIndex": 30.17,
        "pollutionIndex": 86.47,
        "climateIndex": 71.24
      },
      {
        "country": "Egypt",
        "qualityOfLifeIndex": 86.54,
        "purchasingPowerIndex": 22.41,
        "safetyIndex": 53.08,
        "healthCareIndex": 45.84,
        "costOfLivingIndex": 29.54,
        "propertyPriceToIncomeRatio": 13.01,
        "trafficCommuteTimeIndex": 49.78,
        "pollutionIndex": 85.65,
        "climateIndex": 91.98
      },
      {
        "country": "Peru",
        "qualityOfLifeIndex": 85.46,
        "purchasingPowerIndex": 33.95,
        "safetyIndex": 31.85,
        "healthCareIndex": 56.15,
        "costOfLivingIndex": 38.65,
        "propertyPriceToIncomeRatio": 14.95,
        "trafficCommuteTimeIndex": 48.33,
        "pollutionIndex": 84.13,
        "climateIndex": 97.69
      },
      {
        "country": "Philippines",
        "qualityOfLifeIndex": 85.37,
        "purchasingPowerIndex": 23.48,
        "safetyIndex": 57.84,
        "healthCareIndex": 67.47,
        "costOfLivingIndex": 37.63,
        "propertyPriceToIncomeRatio": 24.6,
        "trafficCommuteTimeIndex": 44.63,
        "pollutionIndex": 74.28,
        "climateIndex": 60.81
      },
      {
        "country": "Sri Lanka",
        "qualityOfLifeIndex": 85.16,
        "purchasingPowerIndex": 24.45,
        "safetyIndex": 59.78,
        "healthCareIndex": 72.53,
        "costOfLivingIndex": 31.61,
        "propertyPriceToIncomeRatio": 31.14,
        "trafficCommuteTimeIndex": 59.01,
        "pollutionIndex": 59.14,
        "climateIndex": 59.11
      },
      {
        "country": "Iran",
        "qualityOfLifeIndex": 74.14,
        "purchasingPowerIndex": 22.69,
        "safetyIndex": 50.75,
        "healthCareIndex": 51.7,
        "costOfLivingIndex": 39.01,
        "propertyPriceToIncomeRatio": 25.11,
        "trafficCommuteTimeIndex": 48.01,
        "pollutionIndex": 77.45,
        "climateIndex": 70.99
      },
      {
        "country": "Kenya",
        "qualityOfLifeIndex": 70.56,
        "purchasingPowerIndex": 27.32,
        "safetyIndex": 38.34,
        "healthCareIndex": 55.59,
        "costOfLivingIndex": 40.21,
        "propertyPriceToIncomeRatio": 31.63,
        "trafficCommuteTimeIndex": 56.65,
        "pollutionIndex": 76.6,
        "climateIndex": 99.79
      },
      {
        "country": "Bangladesh",
        "qualityOfLifeIndex": 70.03,
        "purchasingPowerIndex": 33.21,
        "safetyIndex": 36.06,
        "healthCareIndex": 42.8,
        "costOfLivingIndex": 32.25,
        "propertyPriceToIncomeRatio": 13.1,
        "trafficCommuteTimeIndex": 56.73,
        "pollutionIndex": 86.21,
        "climateIndex": 71.29
      },
      {
        "country": "Nigeria",
        "qualityOfLifeIndex": 55.65,
        "purchasingPowerIndex": 13.52,
        "safetyIndex": 36.23,
        "healthCareIndex": 51.59,
        "costOfLivingIndex": 31,
        "propertyPriceToIncomeRatio": 16.7,
        "trafficCommuteTimeIndex": 61.08,
        "pollutionIndex": 87.63,
        "climateIndex": 60.75
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('qualityOfLife', null, {});
  }
};
