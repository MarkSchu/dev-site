import DropShadow1 from 'experiments/drop-shadow-1';
import Rotation1 from 'experiments/rotation-1';
import Rotation2 from 'experiments/rotation-2';
import Rotation3 from 'experiments/rotation-3';
import Rotation4 from 'experiments/rotation-4';
import Rotation5 from 'experiments/rotation-5';
import Rotation6 from 'experiments/rotation-6';
import Rotation7 from 'experiments/rotation-7';
import Rotation8 from 'experiments/rotation-8';


export function getExperiment(path) {
  
  if (path === '/experiments/drop-shadow-1') {
    return DropShadow1();
  }
  if (path === '/experiments/rotation-1') {
    return Rotation1();
  }
  if (path === '/experiments/rotation-2') {
    return Rotation2();
  }
  if (path === '/experiments/rotation-3') {
    return Rotation3();
  }
  if (path === '/experiments/rotation-4') {
    return Rotation4();
  }
  if (path === '/experiments/rotation-5') {
    return Rotation5();
  }
  if (path === '/experiments/rotation-6') {
    return Rotation6();
  }
  if (path === '/experiments/rotation-7') {
    return Rotation7();
  }
  if (path === '/experiments/rotation-8') {
    return Rotation8();
  }
}