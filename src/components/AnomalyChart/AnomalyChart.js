import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import SpectrogramPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.spectrogram.min.js';
import TimelinePlugin from 'wavesurfer.js/src/plugin/timeline';
import ColorMap from 'colormap';

import "./AnomalyChart.css";


function AudioVisualizer({ src }) {
  const waveformRef = useRef(null);
  const spectrogramformRef = useRef(null);
  const timelineformRef = useRef(null);

  useEffect(() => {

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'rgba(55, 96, 183, 0.91)',
      progressColor: 'rgba(55, 96, 183, 0.91)',
      height: 144,
      barHeight: 2,
      responsive: true,
      fillParent: true,
      plugins: [
        SpectrogramPlugin.create({
          container: spectrogramformRef.current,
          labels: true,
          frequencyMin: 0,
          frequencyMax: 8192,
          colorMap: ColorMap({
            colormap: 'temperature',
            nshades: 256,
            format: 'float'
          }),
        }),
        TimelinePlugin.create({
          container: timelineformRef.current,
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
      <div ref={timelineformRef} />
    </div>
  );
}

export default AudioVisualizer