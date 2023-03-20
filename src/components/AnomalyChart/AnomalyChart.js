import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

import {SpectrogramColorMap} from '../../helpers/Config'

import "./AnomalyChart.css"


function AudioVisualizer({ src }) {
  const waveformRef = useRef(null);
  const spectrogramformRef = useRef(null);

  var spectrogramPlugin = require("wavesurfer.js/dist/plugin/wavesurfer.spectrogram.min.js");

  useEffect(() => {

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#1f77b4',
      progressColor: 'rgba(55, 96, 183, 0.91)',
      height: 144,
      barHeight: 2,
      responsive: true,
      fillParent: true,
      plugins: [
        spectrogramPlugin.create({
          container: spectrogramformRef.current,
          labels: true,
          frequencyMin: 0,
          frequencyMax: 8192,
          colorMap: SpectrogramColorMap,
        }),
      ],
    });

    wavesurfer.load(src);

    // Clean up the WaveSurfer instance
    return () => {
      wavesurfer.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <div>
      <div className='waveform-container'>
        <div className='waveform-labels'>
          <span>AMP</span>
          <span>0.75</span>
          <span>0.50</span>
          <span>0.25</span>
          <span>0.00</span>
          <span>-0.25</span>
          <span>-0.50</span>
          <span>-0.75</span>
        </div>
        <div className='waveform-chart' ref={waveformRef} />
      </div>
      <div ref={spectrogramformRef} />
    </div>
  );
}

export default AudioVisualizer