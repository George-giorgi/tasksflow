import { ClockState } from "../../store/cklock";
const clockActions: Record<string, Partial<ClockState>> = {
  ClockIn: { in: false, out: true, sw: true },
  ClockOut: { in: false, out: true, sw: false },
  Switch: { in: false, out: false, sw: true },
};

export { clockActions };
