from __future__ import division
import argparse

from mmcv import Config
from mmcv.runner import load_checkpoint

from mmfashion.core import AttrPredictor
from mmfashion.models import build_predictor
from mmfashion.utils import get_img_tensor


def parse_args():
    parser = argparse.ArgumentParser(
        description='MMFashion Attribute Prediction Demo')
    parser.add_argument(
        '--input',
        type=str,
        help='input image path',
        default='demo/test.txt')
    parser.add_argument(
        '--checkpoint',
        type=str,
        help='checkpoint file',
        default='checkpoint/Predict/vgg/global/latest.pth')
    parser.add_argument(
        '--config',
        help='test config file path',
        default='configs/attribute_predict/global_predictor_vgg_attr.py')
    parser.add_argument(
        '--use_cuda', type=bool, default=False, help='use gpu or not')
    args = parser.parse_args()
    return args


def main():
    args = parse_args()
    cfg = Config.fromfile(args.config)

    cfg.model.pretrained = None
    model = build_predictor(cfg.model)
    load_checkpoint(model, args.checkpoint, map_location='cpu')
    if args.use_cuda:
        model.cuda()
    
    file = open(args.input)

    img_paths = [line.rstrip('\n') for line in file]

    for path in img_paths:
        img_tensor = get_img_tensor(path, args.use_cuda)
        model.eval()
       # predict probabilities for each attribute
        attr_prob = model(img_tensor, attr=None, landmark=None, return_loss=False)
        attr_predictor = AttrPredictor(cfg.data.test)

        attr_predictor.show_prediction(attr_prob)

    file.close()

if __name__ == '__main__':
    main()
