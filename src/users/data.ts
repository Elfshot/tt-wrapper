import { TycoonPlayerData } from "../tt_models/UserData";

export class UserData {
  constructor(vrpId: number) {
    this.vrpId = vrpId;
  }

  private vrpId: number;
  private data!: TycoonPlayerData['data'];

  public init() {
    // init this.data
    // Unimplemented
  }

  public getInventory() {
    // Unimplemented
  }

  public getPosition() {
    // Unimplemented
  }

  public getVehicle() {
    // Unimplemented
  }

  public getSkills() {
    // Unimplemented
  }

  public getCustomization() {
    // Unimplemented
  }

  public getPedStats() {
    // Unimplemented
  }

  public getPlateOverride() {
    // Unimplemented
  }

  public getChat() {
    // Unimplemented
  }

  public getDifficulty() {
    // Unimplemented
  }

  public getGroups() {
    // Unimplemented
  }

  public getLicenses() {
    // Unimplemented
  }
}