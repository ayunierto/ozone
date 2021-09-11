<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ConectionController extends Controller
{
    public function login()
    {
        $client = new Client(['base_uri' => 'https://webmail.sld.cu/login.php']);

        $response = $client->request('POST', '/', ['form_params' => [
            'horde_user' => 'infplcsandres',
            'horde_pass' => 'andrea'
        ]]);
        
        echo $response->getBody();
    }
}
