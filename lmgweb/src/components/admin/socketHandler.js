import React from "react";
import { useEffect, useState } from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import io from 'socket.io-client';

const socket = io();

export default function SocketHandler() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });



    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return (
    <>
        <Paper>
            <Card>
                <p>Connected: { '' + isConnected }</p>
            </Card>
        </Paper>
    </>
  );
}
