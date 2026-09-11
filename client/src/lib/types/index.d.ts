type Activity = {
  id: string;
  title: string;
  date: string; // Формат ISO 8601
  description: string;
  category: string;
  isCancelled: boolean;
  city: string;
  venue: string;
  latitude: number;
  longitude: number;
};
