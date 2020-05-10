<template>
  <div class="application">
    <main>
      <div class="container">
        <h1 class="header">Reliable, efficient delivery</h1>
        <h2 class="impact-header">Powered by Technology</h2>
        <div class="description-container">
          <span class="description"
            >Our Artificial intelligence powered tools use millions of project
            data points to ensure that your project is successful</span
          >
        </div>
      </div>
      <div class="cards-container">
        <div class="cards-list">
          <div class="card-col">
            <Card
              class="card-wrapper"
              :title="getCard(0).title"
              :message="getCard(0).message"
              :accentColor="getCard(0).accentColor"
            >
              <template slot="image">
                <img :src="getCard(0).image" :alt="getCard(0).title" />
              </template>
            </Card>
          </div>
          <div class="card-col">
            <Card
              class="card-wrapper"
              :title="getCard(1).title"
              :message="getCard(1).message"
              :accentColor="getCard(1).accentColor"
            >
              <template slot="image">
                <img :src="getCard(1).image" :alt="getCard(1).title" />
              </template>
            </Card>
            <Card
              class="card-wrapper"
              :title="getCard(2).title"
              :message="getCard(2).message"
              :accentColor="getCard(2).accentColor"
            >
              <template slot="image">
                <img :src="getCard(2).image" :alt="getCard(2).title" />
              </template>
            </Card>
          </div>
          <div class="card-col">
            <Card
              class="card-wrapper"
              :title="getCard(3).title"
              :message="getCard(3).message"
              :accentColor="getCard(3).accentColor"
            >
              <template slot="image">
                <img :src="getCard(3).image" :alt="getCard(3).title" />
              </template>
            </Card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Card from "@/views/challenges/components/Card";
import teamBuilderImage from "@/views/challenges/images/icon-team-builder.svg";
import superVisorImage from "@/views/challenges/images/icon-supervisor.svg";
import calculatorImage from "@/views/challenges/images/icon-calculator.svg";
import karmaImage from "@/views/challenges/images/icon-karma.svg";

export default {
  name: "FourCard",
  components: { Card },
  data() {
    return {
      cards: [
        {
          title: "Supervisor",
          message: "Monitors activity to identify project roadblocks",
          accentColor: "hsl(180, 62%, 55%)",
          image: superVisorImage
        },
        {
          title: "Team Builder",
          message:
            "Scans our talent network to create the optimal team for your project",
          accentColor: "hsl(0, 78%, 62%)",
          image: teamBuilderImage
        },
        {
          title: "Karma",
          message: "Regularly evaluates our talent to ensure quality",
          accentColor: "hsl(34, 97%, 64%)",
          image: karmaImage
        },
        {
          title: "Calculator",
          message:
            "Uses data from past projects to provide better delivery estimates",
          accentColor: "hsl(212, 86%, 64%)",
          image: calculatorImage
        }
      ]
    };
  },
  methods: {
    getCard(index) {
      return this.cards[index];
    }
  }
};
</script>

<style scoped>
.application {
  box-sizing: border-box;
  font-size: 15px;
  width: calc(100vw - 20px);
  min-height: 100vh;
  background-color: hsl(0, 0%, 98%);
  font-family: "Poppins", sans-serif;
}

.application * {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 32px;
  margin-bottom: 48px;
}

.header {
  color: hsl(234, 12%, 34%);
  font-size: x-large;
  font-weight: 200;
  margin-bottom: 16px;
}

.impact-header {
  color: hsl(234, 12%, 34%);
  font-size: x-large;
  font-weight: 600;
  margin-bottom: 24px;
}

.description-container {
  max-width: 500px;
  text-align: center;
}

.description {
  color: hsl(229, 6%, 66%);
  font-weight: normal;
  line-height: 1.6rem;
}

.cards-container {
  width: 100%;
}

.cards-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
}

.card-wrapper {
  margin-bottom: 32px;
  max-width: 400px;
}

@media screen and (min-width: 1240px) {
  .cards-list {
    flex-direction: row;
    align-items: center;
  }

  .cards-container {
    display: flex;
    justify-content: center;
  }

  .card-col:nth-child(2) {
    margin-left: 32px;
    margin-right: 32px;
  }
}
</style>
