import { NodeDataModel } from '../node-data-model';
import { NodeData } from '../../interfaces/node-data';

export class VppTopoTap extends NodeDataModel implements NodeData {

  constructor(data?: NodeData) {
    super(data);
  }
}
