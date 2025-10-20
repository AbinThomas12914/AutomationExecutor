
class HomePage {

    // Behaviors
  async goToAiroplaneTab() {
    const flightsTab = await this.FLIGHTS_TAB();
    await flightsTab.click();
  }


  // Element identifiers as CONSTANTS
  async FLIGHTS_TAB() {
    await driver.pause(3000);
    return await driver.$("//*[@text='Flights']");;
  }
}

module.exports = HomePage;