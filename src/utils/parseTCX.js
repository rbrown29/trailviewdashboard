import { XMLParser } from "fast-xml-parser";

export function parseTCX(tcxContent) {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
  });

  const parsedData = parser.parse(tcxContent);

  const trackpoints = parsedData.TrainingCenterDatabase.Courses.Course.Track.Trackpoint;


  return trackpoints.map((point) => ({
    time: point.Time,
    latitude: parseFloat(point.Position.LatitudeDegrees),
    longitude: parseFloat(point.Position.LongitudeDegrees),
    altitude: parseFloat(point.AltitudeMeters),
    distance: parseFloat(point.DistanceMeters),
  }));
}

