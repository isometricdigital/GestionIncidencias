<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of FileService
 *
 * @author tuguu
 */

namespace Incidencias\IncidenciaBundle\Services;

class FileService {
    protected $pathImages;

    public function __construct($pathIcons){
        $this->pathImages=$pathIcons;
    }

    public function uploadImage($image) {
          $image->move($this->pathImages,$image->getClientOriginalName());
     }
 }





?>
