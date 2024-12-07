import * as d3 from 'd3';
import { useEffect } from 'react';

import VIZ_JSON from '~/data/viz.json';

const vizOptions = [
  { value: 'state-def', label: 'Default' },
  { value: 'state-group', label: 'T2DM Status' },
  { value: 'state-age', label: 'Decade' },
  { value: 'state-site', label: 'Site' },
  { value: 'state-split', label: 'Splits' },
  { value: 'state-Clinical', label: 'Clinical' },
  { value: 'state-ECG', label: 'ECG' },
  { value: 'state-FLIO', label: 'FLIO' },
  { value: 'state-OCT', label: 'OCT' },
  { value: 'state-OCTA', label: 'OCTA' },
  { value: 'state-CFP', label: 'CFP' },
];

const VizComponent = ({ width = 1424, height = 900 }) => {
  useEffect(() => {
    const data = VIZ_JSON;

    function getSelectedStateId() {
      const selectedRadio = document.querySelector(
        'input[name="state"]:checked',
      );
      return selectedRadio ? selectedRadio.id : null;
    }

    function countUniqueValues(data) {
      const uniqueCounts = {};

      data.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (!uniqueCounts[key]) {
            uniqueCounts[key] = new Set();
          }
          uniqueCounts[key].add(item[key]);
        });
      });

      const result = {};
      Object.keys(uniqueCounts).forEach((key) => {
        result[key] = {};
        const l = uniqueCounts[key].size;
        uniqueCounts[key] = Array.from(uniqueCounts[key]).sort();
        if (key == 'group') {
          uniqueCounts[key] = [
            'Healthy',
            'Pre-T2DM',
            'Non-insulin T2DM',
            'Insulin T2DM',
          ];
        } else if (key == 'split') {
          uniqueCounts[key] = ['train', 'val', 'test'];
        }
        const width = 1200;
        for (var i = 0; i < l; i++) {
          result[key][uniqueCounts[key][i]] =
            (i * width) / l + width / (2 * l) - 600;
        }
      });

      return result;
    }

    (function (nodes = data) {
      const nodeUniqes = countUniqueValues(nodes);

      const xyforce = 0.039;
      const alphatarget = 0.001;
      const alphadecay = 0.01;
      const forcecollide = 0.25;

      const canvas = document.getElementById('viz');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      const color = d3.scaleOrdinal(d3.schemeTableau10);

      const simulation = d3
        .forceSimulation(nodes)
        .alphaTarget(alphatarget) // stay hot
        .alphaDecay(alphadecay)
        .force('x', d3.forceX().strength(xyforce))
        .force('y', d3.forceY().strength(xyforce))
        .force(
          'collide',
          d3
            .forceCollide()
            .radius((d) => d.age + 1)
            .iterations(3)
            .strength(forcecollide),
        )
        .on('tick', ticked);

      function updateTargetPositions() {
        simulation.force(
          'x',
          d3
            .forceX(function (d, _i) {
              const state = getSelectedStateId();
              const k = state.split('-')[1];
              if (state == 'state-def') {
                return 0;
              } else {
                return nodeUniqes[k][d[k]];
              }
            })
            .strength(xyforce),
        );
        simulation.force('y', d3.forceY(0).strength(xyforce));
        simulation.alpha(1).restart();
      }

      function ticked() {
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        const state = getSelectedStateId();
        if (state && state != 'state-def') {
          const k = state.split('-')[1];
          let mids = {};
          for (let i = 0; i < nodes.length; ++i) {
            const d = nodes[i];
            if (!(d[k] in mids)) {
              mids[d[k]] = [];
            }
            mids[d[k]].push(d.x);
          }
          Object.keys(mids).forEach((mk) => {
            var avg = 0;
            mids[mk].forEach((mkv) => (avg += mkv));
            avg = avg / mids[mk].length;

            context.lineWidth = 5;
            context.setLineDash([15, 15]);
            context.beginPath();
            context.moveTo(avg, height / 2); // Starting point
            context.lineTo(avg, (-1 * height) / 2 + 100); // Ending point
            context.stroke();

            context.font = '24px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'bottom';
            context.fillText(
              `${mk} (${mids[mk].length})`,
              avg,
              (-1 * height) / 2 + 75,
            );
          });
        } else {
          context.font = '24px Arial';
          context.textAlign = 'center';
          context.textBaseline = 'bottom';
          context.fillText('(n = 1067)', 0, (-1 * height) / 2 + 75);
        }

        for (let i = 0; i < nodes.length; ++i) {
          const d = nodes[i];
          context.beginPath();
          context.moveTo(d.x + d.age, d.y);
          context.arc(d.x, d.y, d.age - 1, 0, 2 * Math.PI);
          context.fillStyle = color(d.group);
          context.fill();
        }
        context.restore();
      }

      // Select all radio buttons with the name "state"
      const radioButtons = document.querySelectorAll('input[name="state"]');

      // Add event listeners to the buttons
      radioButtons.forEach((radio) => {
        radio.addEventListener('change', updateTargetPositions);
      });
    })();
  }, [height, width]);

  return (
    <div className='mx-auto flex max-w-screen-xl flex-col items-center px-8 lg:px-6'>
      <ul className='w-full items-center divide-x rounded-lg border border-gray-200 bg-white py-1 text-sm font-medium text-gray-900 sm:flex'>
        {vizOptions.map((option) => (
          <li className='w-full' key={option.value}>
            <div className='flex items-center ps-3'>
              <input
                id={option.value}
                type='radio'
                defaultChecked={option.value === 'state-def'}
                name='state'
                className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
              />
              <label
                htmlFor={option.value}
                className='ms-2 w-full py-3 text-sm font-medium text-gray-900'
              >
                {option.label}
              </label>
            </div>
          </li>
        ))}
      </ul>

      <canvas id='viz'></canvas>
    </div>
  );
};

export default VizComponent;
