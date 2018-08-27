export class Bug {
  constructor(public id: number,
              public bugReference: string,
              public summary: string,
              public dateOpened: Date,
              public owner: string,
              public requirementsReference: string,
              public priority: string,
              public type: string,
              public status: string,
              public severity: string,
              public currentAction: string,
              public suggestedAction: string,
              public comments?: string,
              public developer?: string,
              public dateClosed?: Date
              ) {
  }
}

