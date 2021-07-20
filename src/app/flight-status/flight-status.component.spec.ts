import { async, ComponentFixture, TestBed,  fakeAsync} from '@angular/core/testing';
import { FlightStatusComponent } from './flight-status.component';
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";
import { FlightStatusService } from '../flight-status.service';
import { AngularMaterialModule } from '../material/angularmaterial/angularmaterial.module';

describe('FlightStatusComponent', () => {
  let component: FlightStatusComponent;
  let fixture: ComponentFixture<FlightStatusComponent>;
  let flightStatusService: FlightStatusService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightStatusComponent ],
      imports: [HttpClientTestingModule,AngularMaterialModule],
      providers: [FlightStatusService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Returns a service with the MockBackend so we can test with dummy responses
    flightStatusService = TestBed.get(FlightStatusService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call API & return FlightStatus',  
    fakeAsync(() => {
        let response = {
          "operationalFlights": [
            {
              "flightNumber": 939,
              "flightScheduleDate": "2021-07-18",
              "id": "20210718+KL+0939",
              "haul": "MEDIUM",
              "route": [
                "AMS",
                "DUB"
              ],
              "airline": {
                "code": "KL",
                "name": "KLM ROYAL DUTCH AIRLINES"
              },
              "codeShareRelations": [
                {
                  "marketingFlightNumber": 5566,
                  "code": "F",
                  "type": "PASSENGER",
                  "airline": {
                    "code": "G3",
                    "name": "GOL LINHAS AEREAS S.A."
                  }
                },
                {
                  "marketingFlightNumber": 939,
                  "code": "F",
                  "type": "PASSENGER",
                  "airline": {
                    "code": "KQ",
                    "name": "KENYA AIRWAYS"
                  }
                },
                {
                  "marketingFlightNumber": 9758,
                  "code": "F",
                  "type": "PASSENGER",
                  "airline": {
                    "code": "MF",
                    "name": "XIAMEN AIRLINES"
                  }
                },
                {
                  "marketingFlightNumber": 3297,
                  "code": "F",
                  "type": "PASSENGER",
                  "airline": {
                    "code": "SU",
                    "name": "PJSC AEROFLOT"
                  }
                },
                {
                  "marketingFlightNumber": 5519,
                  "code": "F",
                  "type": "PASSENGER",
                  "airline": {
                    "code": "VS",
                    "name": "VIRGIN ATLANTIC AIRWAYS LIMITED"
                  }
                }
              ],
              "flightRelations": {
                "onwardFlightData": {
                  "id": "20210719+KL+0932",
                  "flightScheduleDate": "2021-07-19",
                  "airlineCode": "KL",
                  "flightNumber": "0932"
                }
              },
              "flightStatusPublic": "ON_TIME",
              "flightStatusPublicLangTransl": "On time",
              "flightLegs": [
                {
                  "status": "S",
                  "statusName": "Scheduled",
                  "publishedStatus": "ONTIME",
                  "departureInformation": {
                    "airport": {
                      "code": "AMS",
                      "name": "SCHIPHOL AIRPORT",
                      "nameLangTranl": "Schiphol",
                      "city": {
                        "code": "AMS",
                        "name": "AMSTERDAM",
                        "nameLangTranl": "Amsterdam",
                        "country": {
                          "areaCode": "N",
                          "code": "NL",
                          "name": "NETHERLANDS",
                          "nameLangTranl": "Netherlands",
                          "euroCountry": "Y",
                          "euCountry": "Y"
                        }
                      },
                      "location": {
                        "latitude": 52.3083,
                        "longitude": 4.7681
                      },
                      "places": {
                        "gateNumber": [
                          "D14"
                        ],
                        "parkingPosition": "D14",
                        "pierCode": "D",
                        "terminalCode": "02",
                        "boardingPier": "D",
                        "checkInZone": [
                          "09",
                          "10"
                        ],
                        "boardingContactType": "C",
                        "parkingPositionType": "C"
                      }
                    },
                    "times": {
                      "scheduled": "2021-07-18T21:45:00.000+02:00",
                      "latestPublished": "2021-07-18T21:45:00.000+02:00"
                    }
                  },
                  "arrivalInformation": {
                    "airport": {
                      "code": "DUB",
                      "name": "DUBLIN INTERNATIONAL AIRPORT",
                      "nameLangTranl": "Dublin",
                      "city": {
                        "code": "DUB",
                        "name": "DUBLIN",
                        "nameLangTranl": "Dublin",
                        "country": {
                          "areaCode": "E",
                          "code": "IE",
                          "name": "IRELAND",
                          "nameLangTranl": "Ireland",
                          "euroCountry": "Y",
                          "euCountry": "Y"
                        }
                      },
                      "location": {
                        "latitude": 53.4214,
                        "longitude": -6.27
                      },
                      "places": {}
                    },
                    "times": {
                      "scheduled": "2021-07-18T22:25:00.000+01:00",
                      "latestPublished": "2021-07-18T22:25:00.000+01:00",
                      "estimated": {
                        "value": "2021-07-18T22:25:00.000+01:00"
                      }
                    }
                  },
                  "legStatusPublic": "ON_TIME",
                  "legStatusPublicLangTransl": "On time",
                  "passengerCustomsStatus": "NOT SCHENGEN",
                  "serviceType": "J",
                  "serviceTypeName": "Normal Service",
                  "restricted": false,
                  "scheduledFlightDuration": "PT1H40M",
                  "completionPercentage": "0",
                  "timeZoneDifference": "-0100",
                  "aircraft": {
                    "registration": "PHBGT",
                    "typeCode": "73W",
                    "typeName": "BOEING 737-700 (WINGLETS) PASSENGER/BBJ1",
                    "subFleetCodeId": "E",
                    "ownerAirlineCode": "KL",
                    "ownerAirlineName": "KLM ROYAL DUTCH AIRLINES",
                    "physicalPaxConfiguration": "C036M106",
                    "operationalConfiguration": "C012M124",
                    "cockpitCrewEmployer": "KL",
                    "cabinCrewEmployer": "KL",
                    "wifiEnabled": "N",
                    "satelliteConnectivityOnBoard": "N"
                  },
                  "irregularity": {
                    "cancelled": "N"
                  },
                  "otherFlightLegStatuses": {
                    "boardingStatus": "Not Open"
                  },
                  "internalLegStatusArrFocus": false
                }
              ],
              "internalStatusArrFocus": false
            }
          ],
          "page": {
            "pageSize": 36,
            "pageNumber": 3,
            "fullCount": 336,
            "pageCount": 36,
            "totalPages": 4
          }
        };
        let dataSource = 
        [{
          flightNumber: "1311",
          flightScheduleDate: "2021-07-20",
          flightStatusPublicLangTransl: "On time",
          id: "2021072q0+KL+1311",
          name: "KLM ROYAL DUTCH AIRLINES"
        }]

        // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
        let req = flightStatusService.allStatusDetails("https://api.airfranceklm.com/opendata/flightstatus/?origin=AMS","6v7p4zdr3aztawevneaqdb6r");
        expect(req).toBeDefined();

        // Run tests
        expect(dataSource.length).toBe(1);
        expect(dataSource[0].flightStatusPublicLangTransl).toBe("On time");
        expect(dataSource[0].flightNumber).toBe("1311");
    })
);

});