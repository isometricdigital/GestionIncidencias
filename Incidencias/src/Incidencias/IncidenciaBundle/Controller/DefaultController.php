<?php

namespace Incidencias\IncidenciaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller {

    public function indexAction() {
        return $this->render('IncidenciaBundle:Default:informar.html.twig');
    }

    public function enviarIncidenciaAction() {
        $dni = $this->getRequest()->request->get('inDNI');
        $mongo = $this->get('my_mongo');
        $empleado = $mongo->getEmpleado($dni);
        $mensaje = "El dni insertado no esta registrado como empleado";
        if ($empleado) {
            $asunto = $this->getRequest()->request->get('inAsunto');
            $descripcion = $this->getRequest()->request->get('inDescripcion');
            //Cargo la imagen en el servidor
            $image=$this->getRequest()->files->get('inImagen');
            $imagen=null;
            if(isset($image)){
            $fileService = $this->get('my_files');
            $fileService->uploadImage($image);
            //La inserto en la BD
            $imagen=$mongo->insertImage($image->getClientOriginalName());
            
            }
            $mongo->insertIncidencia($descripcion,$asunto,$empleado,$imagen);
            $mensaje = "Gracias por informar de su incidencia";
        }
        return new Response($mensaje);
    }

}
