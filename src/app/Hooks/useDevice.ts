import { useState, useEffect } from "react";
import { getDeviceById, Device } from "../services/deviceService";

export const useDevice = (deviceId: number | null, refetch) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (deviceId === null) return;

    const fetchDevice = async () => {
      setLoading(true);
      try {
        const data = await getDeviceById(deviceId);
        setDevices(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error fetching device data");
      } finally {
        setLoading(false);
      }
    };

    fetchDevice();
  }, [deviceId, refetch]);

  return { devices, loading, error };
};
