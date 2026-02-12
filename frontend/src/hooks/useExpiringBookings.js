import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

export function useExpiringBookingNotifications() {
  return useQuery({
    queryKey: ['expiring-booking-notifications'],
    queryFn: async () => {
      const { data } = await api.get('/notifications/reminders');
      return data;
    },
    refetchInterval: 60000 // Still refetch every minute
  });
}

export function useActiveBookingsEndingSoon() {
  return useQuery({
    queryKey: ['active-bookings-ending-soon'],
    queryFn: async () => {
      const { data } = await api.get('/notifications/ending-soon');
      return data;
    },
    refetchInterval: 30000 // Refetch every 30 seconds
  });
}