<?php
declare(strict_types=1);
use \SendGrid\Mail\Mail;
//Load Composer's autoloader
require 'vendor/autoload.php';

if(isset($_POST) && !empty($_POST)) {
    $params = $_POST;
    if(isset($params['action']) && $params['action'] == 'contact') {
        $email = new Mail();
        $email->setFrom(
            'info@cloudester.com',
            'Cloudester Software LLP'
        );
        $email->setSubject('Healthcare Software Solution Campaign Inquiry From - '.$params['name']);
        $tos = [
            "ronak@cloudester.com" => "Ronak",
            "aakash@cloudester.com" => "Aakash",
            "anurag.karangle@cloudester.com" => "Anurag Karangle"
        ];
        $email->addTos($tos);
        $email->addContent(
            'text/html',
            '<p><strong>Name:</strong> '.$params['name'].'</p>'.
            '<p><strong>Email:</strong> '.$params['email'].'</p>'.
            '<p><strong>Company Name:</strong> '.$params['company_name'].'</p>'.
            '<p><strong>Contact Number:</strong> '.$params['contact_number'].'</p>'
        );
        $sendgrid = new \SendGrid('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');
        try {
            $response = $sendgrid->send($email);
            if($response->statusCode() == 200 || $response->statusCode() == 201 || $response->statusCode() == 202) {
                $return['error'] = 0;
                $return['message'] = 'Email has been sent successfully.';
                echo json_encode($return);
            }
            else {
                $return['error'] = 1;
                $return['message'] = 'Something went wrong. Please try again.';
                echo json_encode($return);
            }
        }
        catch (Exception $e) {
            $return['error'] = 1;
            $return['message'] = $e->getMessage();
            echo json_encode($return);
        }
        die;
    }
    else {
        $return['error'] = 1;
        $return['message'] = 'Something went wrong. Please try again.';
        echo json_encode($return);
    }
}
else {
    $return['error'] = 1;
    $return['message'] = 'Something went wrong. Please try again.';
    echo json_encode($return);
}
?>